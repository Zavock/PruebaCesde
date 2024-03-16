import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Docente } from '../Interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint;

  constructor(private http: HttpClient) { }

  getList(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.apiUrl}docentes`)
  }

  getDocente(id: string): Observable<Docente> {
    return this.http.get<Docente>(`${this.apiUrl}docentes/${id}`)
  }

  add(modelo: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.apiUrl}docentes/guardar`, modelo);
  }

  update(id: number, modelo: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${this.apiUrl}docentes/actualizar/${id}`, modelo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}docentes/eliminar/${id}`);
  }
}
