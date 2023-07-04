import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculasNewComponent } from './components/matriculas-new/matriculas-new.component';
import { MatriculasListComponent } from './components/matriculas-list/matriculas-list.component';

const routes: Routes = [
  { path: 'matriculas-new', component: MatriculasNewComponent },
  { path: 'matriculas', component: MatriculasListComponent },
  { path: '', redirectTo: 'matriculas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
