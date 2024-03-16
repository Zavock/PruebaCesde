import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { UsuarioStoreService } from 'src/app/Services/usuario-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUsuario: FormGroup;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _auth: AuthService, private router: Router, private usuarioStore: UsuarioStoreService) {
    this.formUsuario = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }
  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  onLogin() {
    if (this.formUsuario.valid) {
      this._auth.login(this.formUsuario.value)
        .subscribe({
          next: (dataResponse) => {
            this._auth.guardarToken(dataResponse.token);
            const tokenPayload = this._auth.decodeToken();
            this.usuarioStore.setNombre(tokenPayload.name);
            this.mostrarAlerta('Sesion iniciada', 'Listo');
            this.router.navigate(['docentes']);
          }, error: (e) => {
            this.mostrarAlerta('Error al iniciar', 'Error')
          }
        })

    } else {
      console.log('Form is invalid');
    }
  }

}
