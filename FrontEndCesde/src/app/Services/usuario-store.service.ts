import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStoreService {
  private _nombre$ = new BehaviorSubject<string>('');


  constructor() { }

  public getNombre() {
    return this._nombre$.asObservable();
  }

  public setNombre(name:string) {
    this._nombre$.next(name);
  }
}
