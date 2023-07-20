import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  create(aluno: any): Observable<any> {
    return this.http.post(`${baseUrl}/alunos/`, aluno)
  }

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${baseUrl}/alunos/list`);
  }
}
