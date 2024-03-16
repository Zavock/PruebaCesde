import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/Interfaces/docente';
import { DocenteService } from 'src/app/Services/docente.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  displayedColumns: string[] = ['Acciones', 'Identificacion', 'NombresApellidos', 'CorreoEelectronico', 'NContrato', 'EscalafonTecnico'];
  dataSource = new MatTableDataSource<Docente>();
  constructor(
    private _docenteServicio: DocenteService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.mostrarDocentes();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarDocentes() {
    this._docenteServicio.getList().subscribe({
      next: (dataResponse) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      }, error: (e) => { }
    })
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    });
  }

  dialogoEliminarDocente(dataDocente: Docente) {
    this.dialog.open(DialogDeleteComponent, {
      disableClose: true,
      data: dataDocente
    }).afterClosed().subscribe(resultado => {
      if (resultado === 'eliminar') {
        this._docenteServicio.delete(dataDocente.id).subscribe({
          next:(dataResponse) => {
            this.mostrarAlerta('Docente eliminado', 'Listo');
            this.mostrarDocentes();
          }, error:(e)=>{}
        });
      }
    })
  }
}
