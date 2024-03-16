import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Docente } from 'src/app/Interfaces/docente';
import { DocenteService } from 'src/app/Services/docente.service';

@Component({
  selector: 'app-docente-crear',
  templateUrl: './docente-crear.component.html',
  styleUrls: ['./docente-crear.component.css']
})
export class DocenteCrearComponent implements OnInit {

  formDocente: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _docenteService: DocenteService) {

    this.formDocente = this.fb.group({
      id: ['', Validators.required],
      tipoIdentificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      telefonoCelular: ['', Validators.required],
      numeroContrato: ['', Validators.required],
      ciudadResidencia: ['', Validators.nullValidator],
      escalafonTecnico: ['', Validators.required],
      escalafonExtension: ['', Validators.required]
    });

  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  addEditDocente(){
    
    console.log(this.formDocente);
    console.log(this.formDocente.value);

    const modelo:Docente = {
      id: this.formDocente.value.id,
      tipoIdentificacion: this.formDocente.value.tipoIdentificacion,
      nombres: this.formDocente.value.nombres,
      apellidos: this.formDocente.value.apellidos,
      correoElectronico: this.formDocente.value.correoElectronico,
      telefonoCelular: String(this.formDocente.value.telefonoCelular),
      numeroContrato: String(this.formDocente.value.numeroContrato),
      ciudadResidencia: this.formDocente.value.ciudadResidencia,
      escalafonTecnico: this.formDocente.value.escalafonTecnico,
      escalafonExtension: this.formDocente.value.escalafonExtension
    }

    this._docenteService.add(modelo).subscribe({
      next:(dataResponse) => {
        this.mostrarAlerta('Docente creado', 'Listo');
        this.formDocente.reset();
      },error:(e) =>{
        this.mostrarAlerta('No se pudo crear', 'Error');
      }
    })
  }

  ngOnInit(): void {
  }

}
