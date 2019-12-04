import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Student } from '../student';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student: Observable<Student>;
  students: Observable<Student[]>;
  constructor(private service: StudentService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {

    this.reloadData();
  }
  reloadData() {
    this.students = this.service.getStudentList();

}
deleteStudent(id:number){
  if(confirm('Do you want to delete this record?'))
  {
    this.service.deleteStudent(id).subscribe(data=>{
      this.toastr.warning('Deleted Successfully..!', 'Everything OK :)');
      console.log(data);
    });
    this.reloadData();
  }
}
search(stu_name:string)
{
  this.student=this.service.searchStudent(stu_name);
  if(stu_name="")
  {
    this.student=this.service.getStudentList();
  }
}


}











  

 
