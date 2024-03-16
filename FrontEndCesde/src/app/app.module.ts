import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocenteComponent } from './Components/docente/docente.component';
import { DocenteActualizarComponent } from './Components/docente-actualizar/docente-actualizar.component';
import { DocenteCrearComponent } from './Components/docente-crear/docente-crear.component';
import { LoginComponent } from './Components/login/login.component';
import { SharedModule } from './Reutilizable/shared/shared.module';
import { DialogDeleteComponent } from './Components/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    DocenteActualizarComponent,
    DocenteCrearComponent,
    LoginComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
