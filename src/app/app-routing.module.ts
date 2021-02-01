import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layout/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ListUsersComponent} from './modules/list-users/list-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listusers',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
