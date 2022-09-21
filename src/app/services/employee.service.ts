import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { API_PATH } from "src/environments/environment"
import { Employee } from "../models/employee.model"
import { Observable } from "rxjs"

@Injectable({
	providedIn: "root",
})
export class EmployeeService {
	constructor(private http: HttpClient) {}

	getAllEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>(API_PATH + "/employee")
	}

	getEmployeeById(employeeId: number): Observable<Employee> {
		return this.http.get<Employee>(`${API_PATH}/employee/${employeeId}`)
	}

	addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
		return this.http.post<Employee>(API_PATH + "/employee", addEmployeeRequest)
	}

	updateEmployee(employeeId: number, updateEmployeeRequest: Employee): Observable<Employee> {
		return this.http.put<Employee>(`${API_PATH}/employee/${employeeId}`, updateEmployeeRequest)
	}

	deleteEmployee(employeeId: number): Observable<Employee> {
		return this.http.delete<Employee>(`${API_PATH}/employee/${employeeId}`)
	}
}
