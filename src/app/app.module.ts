import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculasNewComponent } from './components/matriculas-new/matriculas-new.component';
import { MatriculasListComponent } from './components/matriculas-list/matriculas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculasNewComponent,
    MatriculasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
