import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './pages/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    loadChildren: ()=> import('./pages/dashboard/dashboard.module').then(m=>m.DashBoardModule),
    canActivate:[AuthGuard]
  },
  {
    path:'category',
    loadChildren: ()=> import('./pages/category/category.module').then(m=>m.CategoryModule),
    canActivate:[AuthGuard]
  },
 
  {
    path:'expense',
    loadChildren: ()=> import('./pages/expense/expense.module').then(m=>m.ExpenseModule),
    canActivate:[AuthGuard]
  },
  {
    path:'system',
    loadChildren: ()=> import('./pages/system/system.module').then(m=>m.SystemModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
