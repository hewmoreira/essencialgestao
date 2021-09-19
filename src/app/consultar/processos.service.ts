import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseProcessos } from './consultar.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getProcessos(): Observable<ResponseProcessos> {
    return this.http.get<ResponseProcessos>(this.url);
  }
}
