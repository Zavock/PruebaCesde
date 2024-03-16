import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint;
  private usuarioPayload: any;
  constructor(private http: HttpClient, private _router: Router) {
    this.usuarioPayload = this.decodeToken();
  }

  login(modelo: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}usuarios/login`, modelo)
  }

  guardarToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['login']);
  }

  decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  getNombreToken() {
    if (this.usuarioPayload)
      return this.usuarioPayload.name;
  }
}
