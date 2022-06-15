import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/models/auth/login_dto';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginDTO = new LoginDTO();
  loginForm = new FormGroup ({
    email: new FormControl ('', [ Validators.required]),
    password: new FormControl ('', [ Validators.required])
  });

  constructor(private service : AuthService, private router: Router, public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  doLogin() {

    this.loginDTO.email = this.loginForm.get('email')?.value;
    this.loginDTO.password = this.loginForm.get('password')?.value;
    this.service.login(this.loginDTO).subscribe(result => {
      if (result.rol == 'ADMIN') {
        localStorage.setItem('token', result.token);
        localStorage.setItem('id_usuario', result.id);
        this.router.navigate(['/home']);
      }
      else {
        this.openDialog();
      }
    });
  }

  openDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });
  }

}
