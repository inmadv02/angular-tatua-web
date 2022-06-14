import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUsuarioDTO } from '../models/auth/get_usuario_dto';
import { GetUsuarioEditDTO } from '../models/user/get_usuario_edit_dto';
import { ListUsuariosResponse } from '../models/user/list_usuarios';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userBaseUrl = `${environment.apiBaseUrl}/usuario`;

  constructor(private http: HttpClient) {}

  getListUsuarios(): Observable<ListUsuariosResponse> {
    let requestUrl = `${this.userBaseUrl}/lista-usuarios`;
    return this.http.get<ListUsuariosResponse>(requestUrl, DEFAULT_HEADERS);
  }

  getUsuarioById(id: String): Observable<GetUsuarioDTO>{
    let requestUrl = `${this.userBaseUrl}/perfil/${id}`;
    return this.http.get<GetUsuarioDTO>(requestUrl, DEFAULT_HEADERS);
  }

  getMyProfile(): Observable<GetUsuarioDTO>{
    let requestUrl = `${this.userBaseUrl}/my-perfil`;
    return this.http.get<GetUsuarioDTO>(requestUrl, DEFAULT_HEADERS);
  }

  editPerfil(userDTO: GetUsuarioDTO): Observable<GetUsuarioEditDTO>{
    let requestUrl = `${this.userBaseUrl}/perfil/editar`;
    return this.http.put<GetUsuarioEditDTO>(requestUrl, userDTO, DEFAULT_HEADERS);
  }
}
