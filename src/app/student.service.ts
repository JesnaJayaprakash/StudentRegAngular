import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:53452/api';

  constructor(private http: HttpClient) { }
  
  addStudent(ast:Student)
  {
    return this.http.post(this.baseUrl+'/Students',ast);
  }
  getStudentList(): Observable<any> {
    return this.http.get(this.baseUrl + '/Students');
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/Students/'+id);
  }
  searchStudent(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/Students?name='+name);
  }
  updateStudent(id: number,student: Student)
  {
    return this.http.put(this.baseUrl+'/Students/'+id,student);
  }
  getStudent(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/Students/'+id);
  }
}
