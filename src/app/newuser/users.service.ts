import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestCreate, ResponseCreate } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }


  createUser(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);

  }
}