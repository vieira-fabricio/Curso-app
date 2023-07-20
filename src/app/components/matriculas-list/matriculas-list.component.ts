import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatriculasService } from 'src/app/services/matriculas.service';

@Component({
  selector: 'app-matriculas-list',
  templateUrl: './matriculas-list.component.html',
  styleUrls: ['./matriculas-list.component.css']
})
export class MatriculasListComponent implements OnInit {

  matriculas:any;
  alunos: any;
  aluno:any;

  constructor(
    private matriculaService: MatriculasService,
    private alunoService: AlunoService
    ){
  }

  ngOnInit(): void {
    this.exibirAlunos();
  }

  exibirAlunos(): void {
    this.alunoService.list()
        .subscribe(
          data => {
            this.alunos = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }

  listMatriculas(): void {
    this.matriculaService.findByAluno(this.aluno)
        .subscribe(
          data => {
            this.matriculas = data;
            console.log(data);
            console.log(this.aluno)
          },
          error => {
            console.log(error);
          });
  }

}


