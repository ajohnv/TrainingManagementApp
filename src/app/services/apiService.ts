import { Injectable } from "@angular/core";
import { HttpClient,HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn:"root"
})

// Generic API service
export class ApiService{

  // reference: https://designtechworld.medium.com/centralize-your-angular-http-logic-206a13269024
  // https://stackoverflow.com/questions/49726333/415-unsupported-media-type-angular-4-post
  // https://forum.ionicframework.com/t/415-unsupported-media-type/197706

  private baseUrl = 'http://localhost:5117/api';

  constructor(private http: HttpClient)  {  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = { params, headers };
    console.log("ApiService:Getting data using url: " + `${this.baseUrl}/${url}`);
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    console.log("ApiService:Posting data using url: " + `${this.baseUrl}/${url}`);
    console.log("ApiService:Posting data - body: " + body);
    let result = this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
    console.log("Post result = " + result);
    return result;
  }
}
