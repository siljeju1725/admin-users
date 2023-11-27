import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  addUsers(data: any): Observable<any>{
    return this._http.post('http://api-users.test/api/users',data);
    console.log(data);

  }

  getUsers(): Observable<any>{
    return this._http.get('http://api-users.test/api/users');

  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete('http://api-users.test/api/users/'+id);

  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put('http://api-users.test/api/users/'+id, data);
  }




}
