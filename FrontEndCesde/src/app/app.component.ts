import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { UsuarioStoreService } from './Services/usuario-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FrontEndCesde';
  public nombre: string = '';
  constructor(private _auth: AuthService, private _usuarioStore: UsuarioStoreService) { }
  ngOnInit() {
    this._usuarioStore.getNombre()
      .subscribe(valor => {
        let nombreToken = this._auth.getNombreToken();
        this.nombre = valor || nombreToken;
      })

  }

  logout() {
    this._auth.logout();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }
}