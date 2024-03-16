import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    });
  }
  canActivate(): boolean {
    if (this._auth.isLoggedIn()) {
      return true;
    } else {
      this.mostrarAlerta('Por favor, inicia sesion primero', 'Error');
      this.router.navigate(['login']);
      return false;
    }
  }

}
