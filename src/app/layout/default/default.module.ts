import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {ListUsersComponent} from '../../modules/list-users/list-users.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
