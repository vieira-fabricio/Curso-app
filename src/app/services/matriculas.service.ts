import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/matriculas/list`);
  }

  create(matricula: any): Observable<any>{
    return this.http.post(`${baseUrl}/matriculas/`, matricula);
  }

  findByAluno(aluno:any): Observable<any>{
    return this.http.get(`${baseUrl}/matriculas/findByAluno/${aluno.name}`);
  }
}
