import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Employee } from "src/app/models/employee.model"
import { EmployeeService } from "src/app/services/employee.service"

@Component({
	selector: "app-employee-form-edit",
	templateUrl: "./employee-form-edit.component.html",
	styleUrls: ["./employee-form-edit.component.css"],
})
export class EmployeeFormEditComponent implements OnInit {
	updateEmployeeRequest: Employee = {
		id: 0,
		name: "",
		age: 0,
		department: "",
	}

	constructor(
		private route: ActivatedRoute,
		private employeeService: EmployeeService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe({
			next: (params) => {
				const id = Number(params.get("id"))

				if (id) {
					this.employeeService.getEmployeeById(id).subscribe({
						next: (response) => {
							this.updateEmployeeRequest = response
						},
					})
				}
			},
		})
	}

	updateEmployee() {
		this.employeeService
			.updateEmployee(this.updateEmployeeRequest.id, this.updateEmployeeRequest)
			.subscribe({
				next: () => {
					this.router.navigate(["/"])
				},
				error: (response) => {
					console.error(response)
				},
			})
	}

	deleteEmployee() {
		this.employeeService.deleteEmployee(this.updateEmployeeRequest.id).subscribe({
			next: () => {
				this.router.navigate(["/"])
			},
			error: (response) => {
				console.error(response)
			},
		})
	}
}
