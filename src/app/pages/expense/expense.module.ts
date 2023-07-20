import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpenseComponent } from "./expense.component";
import { ExpenseRoutingModule } from "./expense-routing.module";
import { NavebarModule } from "src/app/components/navbar/navbar.module";
import { SidebarModule } from "src/app/components/sidebar/sidebar.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  providers:[],
  declarations:[ExpenseComponent],
  imports:[
    CommonModule,
    ExpenseRoutingModule,
    NavebarModule,
    SidebarModule,

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ]
})
export class ExpenseModule{}
