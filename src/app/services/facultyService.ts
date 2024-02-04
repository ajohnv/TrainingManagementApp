import { Injectable } from "@angular/core";
import { HttpClient,HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/models/faculty.model';


@Injectable({
  providedIn:"root"
})

// Faculty API service
export class facultyService{

  // https://forum.ionicframework.com/t/415-unsupported-media-type/197706/2
  // https://www.concretepage.com/angular/angular-httpclient-post

  private baseUrl = 'http://localhost:5117/api';

  constructor(private http: HttpClient)  {  }

  getAllFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.baseUrl + "/FacultiesSubjects/GetFacultySubjectRemarks");
  }

  // getFacultyById(id: string): Observable<Faculty> {
  //   return this.http.get<Faculty>(`/api/customer/${id}`);
  // }

  // updateFaculty(faculty: Faculty): Observable<Faculty> {
  //   return this.http.post<Faculty>(`/api/customer/${id}`, faculty);
  // }

}
