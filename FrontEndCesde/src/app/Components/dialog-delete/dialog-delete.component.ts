import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Docente } from 'src/app/Interfaces/docente';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    private dialogoReferencia: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDocente: Docente
  ) { }

  ngOnInit(): void {
  }

  confirmarEliminar(){
    if(this.dataDocente){
      this.dialogoReferencia.close('eliminar');
    }

  }

}
