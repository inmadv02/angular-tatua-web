import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUsuarioDTO } from '../models/auth/create_usuario_dto';
import { GetUsuarioDTO } from '../models/auth/get_usuario_dto';
import { LoginDTO } from '../models/auth/login_dto';
import { LoginResponse } from '../models/auth/login_response';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/auth`;

  constructor(private http: HttpClient) { }

  register(registerDto: CreateUsuarioDTO): Observable<GetUsuarioDTO> {
    let requestUrl = `${this.authBaseUrl}/register`;
    return this.http.post<GetUsuarioDTO>(requestUrl, registerDto, DEFAULT_HEADERS);
  }

  login(loginDTO: LoginDTO): Observable<LoginResponse> {
    let requestUrl = `${this.authBaseUrl}/login`;
    return this.http.post<LoginResponse>(requestUrl, loginDTO, DEFAULT_HEADERS);
  }

}
