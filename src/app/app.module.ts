import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ANGULARMATETRIAL} from '../helpers/modules/AngularMaterialModules';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';

import {authInterceptorProviders} from '../helpers/auth.interceptor';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardFormateurComponent} from './board-formateur/board-formateur.component';
import {BoardApprenantComponent} from './board-apprenant/board-apprenant.component';
import {BoardCmComponent} from './board-cm/board-cm.component';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {DefaultModule} from './layout/default/default.module';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    LoginFormComponent,
    FourOhFourComponent,
    BoardAdminComponent,
    BoardFormateurComponent,
    BoardApprenantComponent,
    BoardCmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ANGULARMATETRIAL,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    DefaultModule,
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
