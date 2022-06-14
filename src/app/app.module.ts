import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserItemDialogComponent } from './components/user-item-dialog/user-item-dialog.component';
import { CitasTableComponent } from './components/citas-table/citas-table.component';
import { CitaItemDialogComponent } from './components/cita-item-dialog/cita-item-dialog.component';
import { DeleteCitaDialogComponent } from './components/delete-cita-dialog/delete-cita-dialog.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PublicacionTableComponent } from './components/publicacion-table/publicacion-table.component';
import { PublicacionItemDialogComponent } from './components/publicacion-item-dialog/publicacion-item-dialog.component';
import { DeletePublicacionDialogComponent } from './components/delete-publicacion-dialog/delete-publicacion-dialog.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LoginDialogComponent,
    UsersTableComponent,
    UserItemComponent,
    UserItemDialogComponent,
    CitasTableComponent,
    CitaItemDialogComponent,
    DeleteCitaDialogComponent,
    ToolbarComponent,
    HomeComponent,
    PublicacionesComponent,
    CitasComponent,
    PublicacionTableComponent,
    PublicacionItemDialogComponent,
    DeletePublicacionDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialImportsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
