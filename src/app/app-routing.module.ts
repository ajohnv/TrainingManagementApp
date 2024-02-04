import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { BatchesComponent } from './components/batches/batches.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
// import { FacultiesComponent } from './faculties/faculties.component';
// import { BatchesComponent } from './batches/batches.component';
// import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: '', component: FacultiesComponent },
  { path: 'faculties', component: FacultiesComponent},
  { path: 'batches', component: BatchesComponent},
  { path: 'subjects', component: SubjectsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
