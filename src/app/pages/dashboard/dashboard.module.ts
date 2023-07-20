import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NavebarModule } from "src/app/components/navbar/navbar.module";
import { SidebarModule } from "src/app/components/sidebar/sidebar.module";

@NgModule({
  providers:[],
  declarations:[DashboardComponent],
  imports:[
    CommonModule,
    DashboardRoutingModule,
    NavebarModule,
    SidebarModule,
  ]
})
export class DashBoardModule{}
