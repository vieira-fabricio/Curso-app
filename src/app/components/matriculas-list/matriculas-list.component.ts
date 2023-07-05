import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/services/matriculas.service';

@Component({
  selector: 'app-matriculas-list',
  templateUrl: './matriculas-list.component.html',
  styleUrls: ['./matriculas-list.component.css']
})
export class MatriculasListComponent implements OnInit {

  matriculas:any;

  constructor(private matriculaService: MatriculasService){
  }

  ngOnInit(): void {
      this.listMatriculas();
  }

  listMatriculas(): void {
    this.matriculaService.list()
        .subscribe(
          data => {
            this.matriculas = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }

}


