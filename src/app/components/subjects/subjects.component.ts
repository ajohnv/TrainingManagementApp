import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseSubject } from 'src/app/models/subject.model';
// import { CourseSubject } from '../models/subject.model';
import { ApiService } from 'src/app/services/apiService';
import { Employee } from 'src/app/models/employee.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: CourseSubject[];
  subjectsForm: FormGroup;

  constructor(private apiService: ApiService){}

  ngOnInit() {

    this.getSubjects();

    this.subjectsForm = new FormGroup({
      'nameFormGroup': new FormGroup({
        'subjectName': new FormControl(null, [Validators.required]),
      }),
      'remarksFormGroup': new FormGroup({
        'subjectRemarks': new FormControl(null, [Validators.required]),
      }),
    });

  }

  onSubmit() {
    // alert("Testing");
    console.log(this.subjectsForm.value);
    let s = this.subjectsForm.get('nameFormGroup.subjectName').value;
    let r = this.subjectsForm.get('remarksFormGroup.subjectRemarks').value;
    let subjectData = { subjectId: 0, subjectName: s, remarks: r };
    this.apiService.post<any>('Subjects/InsertSubjects', subjectData).subscribe(
      data => {
        console.log("data = " + data);
      });

    this.subjectsForm.reset();
    this.getSubjects();
  }

  getSubjects()
  {
    this.apiService.get<CourseSubject[]>('Subjects/GetSubjects')
      .subscribe(data => {
        // console.log(data);
        this.subjects = data;
      });
  }


}


