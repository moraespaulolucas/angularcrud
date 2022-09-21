import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { EmployeeFormEditComponent } from "./components/employee-form-edit/employee-form-edit.component"
import { EmployeeFormComponent } from "./components/employee-form/employee-form.component"
import { EmployeeListComponent } from "./components/employee-list/employee-list.component"

const routes: Routes = [
	{
		path: "",
		component: EmployeeListComponent,
	},
	{
		path: "add",
		component: EmployeeFormComponent,
	},
	{
		path: "edit/:id",
		component: EmployeeFormEditComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
