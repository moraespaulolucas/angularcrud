import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { EmployeeListComponent } from "./components/employee-list/employee-list.component"
import { EmployeeFormComponent } from "./components/employee-form/employee-form.component"
import { FormsModule } from "@angular/forms"
import { EmployeeFormEditComponent } from "./components/employee-form-edit/employee-form-edit.component"
import { AppRoutingModule } from "./app-routing.module"

@NgModule({
	declarations: [
		AppComponent,
		EmployeeListComponent,
		EmployeeFormComponent,
		EmployeeFormEditComponent,
	],
	imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
