import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetPublicacionDetailsDTO } from '../models/publicaciones/get_publicacion_details_dto';
import { PublicacionResponse } from '../models/publicaciones/list_publicaciones';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  publicacionBaseUrl = `${environment.apiBaseUrl}/publicacion`;

  constructor(private http: HttpClient) {}

  getListPublicaciones(): Observable<PublicacionResponse[]> {
    let requestUrl = `${this.publicacionBaseUrl}/todas`;
    return this.http.get<PublicacionResponse[]>(requestUrl, DEFAULT_HEADERS);
  }

  getPublicacionById(id: String): Observable<GetPublicacionDetailsDTO> {
    let requestUrl = `${this.publicacionBaseUrl}/${id}`;
    return this.http.get<GetPublicacionDetailsDTO>(requestUrl, DEFAULT_HEADERS);
  }

  deletePublicacion(id: String) {
    let requestUrl = `${this.publicacionBaseUrl}/borrar/${id}`;
    return this.http.delete(requestUrl, DEFAULT_HEADERS);
  }
}
