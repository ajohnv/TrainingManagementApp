import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { FacultiesComponent } from '.component/faculties/faculties.component';
// import { FacultyListComponent } from '.component/faculties/faculty-list/faculty-list.component';
// import { FacultyItemComponent } from '.component/faculties/faculty-list/faculty-item/faculty-item.component';
// import { BatchesComponent } from '.component/batches/batches.component';
// import { FacultyEditComponent } from '.component/faculties/faculty-edit/faculty-edit.component';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { FacultyEditComponent } from './components/faculties/faculty-edit/faculty-edit.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { BatchesComponent } from './components/batches/batches.component';
import { FacultyItemComponent } from './components/faculties/faculty-list/faculty-item/faculty-item.component';
import { FacultyListComponent } from './components/faculties/faculty-list/faculty-list.component';
// import { SubjectsComponent } from '.component//subjects/subjects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacultiesComponent,
    FacultyListComponent,
    FacultyItemComponent,
    BatchesComponent,
    FacultyEditComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
