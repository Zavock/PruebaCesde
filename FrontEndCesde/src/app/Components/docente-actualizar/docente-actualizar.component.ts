import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/Services/docente.service';
import { Docente } from 'src/app/Interfaces/docente';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-docente-actualizar',
  templateUrl: './docente-actualizar.component.html',
  styleUrls: ['./docente-actualizar.component.css']
})
export class DocenteActualizarComponent implements OnInit {

  formDocente: FormGroup;
  docenteData: Docente = {
    id: 0,
    tipoIdentificacion: '',
    nombres: '',
    apellidos: '',
    correoElectronico: '',
    telefonoCelular: '',
    numeroContrato: '',
    ciudadResidencia: '',
    escalafonTecnico: '',
    escalafonExtension: ''
  }
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private route: ActivatedRoute, private _docenteService: DocenteService) {
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

  addEditDocente() {

    console.log(this.formDocente);
    console.log(this.formDocente.value);

    const modelo: Docente = {
      id: Number(this.formDocente.value.id),
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

    this._docenteService.update(this.docenteData.id, modelo).subscribe({
      next: (dataResponse) => {
        this.mostrarAlerta('Docente editado', 'Listo');
      }, error: (e) => {
        this.mostrarAlerta('No se pudo editar', 'Error');
      }
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this._docenteService.getDocente(id).subscribe({
            next: (response) => {
              this.docenteData = response;
            }
          })
        }
      }
    })
  }

}
