import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateFavoritoDTO } from '../models/favorito/create_favorito_dto';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  favoritoBaseUrl = `${environment.apiBaseUrl}/favorito`;

  constructor(private http: HttpClient) {}

  addFavorito(dto: CreateFavoritoDTO): Observable<any>{
    let requestUrl = `${this.favoritoBaseUrl}/marcar-favorito`;
    return this.http.post<any>(requestUrl, dto, DEFAULT_HEADERS);
  }

  removeFavorito(id:string){
    let requestUrl = `${this.favoritoBaseUrl}/${id}/desmarcar-favorito`;
    return this.http.delete(requestUrl, DEFAULT_HEADERS);
  }

}
