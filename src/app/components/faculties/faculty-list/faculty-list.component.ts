import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty.model';
// import { Faculty } from '../../models/faculty.model';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

faculties : Faculty[];
//   new Faculty('Kripa', new Array("C#", "Angular", )),
//   new Faculty('Akash', new Array("Java", "React", )),
// ];


constructor(private apiService: ApiService){}

ngOnInit() {
  this.getFaculties();
}

getFaculties()
  {
    this.apiService.get<Faculty[]>('FacultiesSubjects/GetFacultySubjectRemarks')
      .subscribe(data => {
        // console.log(data);
        this.faculties = data;
      });
  }

}
