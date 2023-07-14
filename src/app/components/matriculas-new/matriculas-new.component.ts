import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatriculasService } from 'src/app/services/matriculas.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-matriculas-new',
  templateUrl: './matriculas-new.component.html',
  styleUrls: ['./matriculas-new.component.css']
})

export class MatriculasNewComponent implements OnInit{

  alunos: any;
  aluno: any;

  cursos: any;
  curso: any;
  
  constructor(
    private matriculaService: MatriculasService,
    private alunoService: AlunoService,
    private cursoService: CursoService,
  ){}
  
  ngOnInit(): void {
    this.exibirAlunos();
    this.exibirCursos();
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

  exibirCursos(): void {
    this.cursoService.list()
        .subscribe(
          data => {
            this.cursos = data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
  }

  save(): void {
    console.log('Nome do aluno: ', this.aluno);
    const matricula = {
      aluno: this.aluno.name,
      curso: this.curso.nome,
    };
    console.log('Informações da matrícula: ', matricula);
    this.matriculaService.create(matricula)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
  }

}

