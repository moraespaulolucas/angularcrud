import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Employee } from "src/app/models/employee.model"
import { EmployeeService } from "src/app/services/employee.service"

@Component({
	selector: "app-employee-form",
	templateUrl: "./employee-form.component.html",
	styleUrls: ["./employee-form.component.css"],
})
export class EmployeeFormComponent implements OnInit {
	addEmployeeRequest: Employee = {
		id: 0,
		name: "",
		age: 0,
		department: "",
	}

	constructor(private employeeeService: EmployeeService, private router: Router) {}

	ngOnInit(): void {}

	addEmployee() {
		this.employeeeService.addEmployee(this.addEmployeeRequest).subscribe({
			next: () => {
				this.router.navigate(["/"])
			},
			error: (response) => {
				console.error(response)
			},
		})
	}

	cancel() {
		this.router.navigate(["/"])
	}
}
