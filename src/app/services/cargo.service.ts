import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private _http: HttpClient) { }

  getCargo(): Observable<any>{
    return this._http.get('http://api-users.test/api/cargos');

  }

  getDepartamento(): Observable<any>{
    return this._http.get('http://api-users.test/api/departamentos');

  }
}
