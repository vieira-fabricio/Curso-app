import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit{
  
  alunos:any;
  aluno:any;
  name:any;
  cpf:any;

  constructor(private alunoService: AlunoService){}

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

  save(): void {
    const aluno = {
      name: this.name,
      cpf: this.cpf
    };
    console.log(aluno);
    this.alunoService.create(aluno)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
  }
}
