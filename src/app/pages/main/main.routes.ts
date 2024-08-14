import { Route, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
// export  routes : Routes[
//     {path:'',component:MainComponent}
// ]
export default [
    {path:'',component:MainComponent,children:[
        {path:'',component:DashboardComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'user-management',component:UserManagementComponent}
    ]}

] as Route[];