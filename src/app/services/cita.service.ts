import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCitaDetailsDTO } from '../models/cita/get_cita_details_dto';
import { GetCitaDTO } from '../models/cita/get_cita_dto';
import { ListCitasResponse } from '../models/cita/list_cita';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  citaBaseUrl = `${environment.apiBaseUrl}/cita`;

  constructor(private http: HttpClient) { }

  getCitas(): Observable<ListCitasResponse> {
    let requestUrl = `${this.citaBaseUrl}/todas`;
    return this.http.get<ListCitasResponse>(requestUrl, DEFAULT_HEADERS);
  }

  getCitaById(id: String): Observable<GetCitaDetailsDTO> {
    let requestUrl = `${this.citaBaseUrl}/${id}`;
    return this.http.get<GetCitaDetailsDTO>(requestUrl, DEFAULT_HEADERS);
  }

  deleteCita(id: String) {
    let requestUrl = `${this.citaBaseUrl}/${id}`;
    return this.http.delete(requestUrl, DEFAULT_HEADERS);
  }
}
