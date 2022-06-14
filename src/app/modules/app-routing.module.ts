import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';



const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
