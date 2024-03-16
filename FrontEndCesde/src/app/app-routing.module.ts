import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DocenteComponent } from './Components/docente/docente.component';
import { DocenteCrearComponent } from './Components/docente-crear/docente-crear.component';
import { DocenteActualizarComponent } from './Components/docente-actualizar/docente-actualizar.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'docentes', component: DocenteComponent, canActivate: [AuthGuard] },
  { path: 'docentes/crear', component: DocenteCrearComponent, canActivate: [AuthGuard] },
  { path: 'docentes/editar/:id', component: DocenteActualizarComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
