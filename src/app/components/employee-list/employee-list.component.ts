import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = []

	constructor(private employeeService: EmployeeService, private router: Router) {}

	ngOnInit(): void {
		this.employeeService.getAllEmployees().subscribe({
			next: (response) => {
				this.employees = response
			},
			error: (response) => {
				console.error(response)
			},
		})
	}

	navigateTo(path: Array<String>) {
		this.router.navigate(path)
	}
}
