import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  studentform:FormGroup
  student:Student=new Student();
  
  constructor(private formBuilder:FormBuilder,private service:StudentService,private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.studentform=this.formBuilder.group({
      stu_name:['',Validators.compose([Validators.required])],
      stu_age:['',Validators.compose([Validators.required])],
      stu_gender:['',Validators.compose([Validators.required])],
      stu_phno:['',Validators.compose([Validators.required])],
      stu_dept:['',Validators.compose([Validators.required])],
      stu_address:['',Validators.compose([Validators.required])],
    });
  }
  get formcontrol()
  {
    return this.studentform.controls;
  }
  addStudents()
  {

    

    this.student.stu_name = this.studentform.controls.stu_name.value;
    this.student.stu_age = this.studentform.controls.stu_age.value;
    this.student.stu_gender = this.studentform.controls.stu_gender.value;
    this.student.stu_phno = this.studentform.controls.stu_phno.value;
    this.student.stu_dept = this.studentform.controls.stu_dept.value;
    this.student.stu_address = this.studentform.controls.stu_address.value;


    this.service.addStudent(this.student).subscribe(res=>{
      if(res==0)
      {
        this.toastr.success('Successfully Added', 'Great ;)');
        
      }
      else
      {
        this.toastr.error("Student already exist!!!!!!");
      }

    });
 
    this.ngOnInit();


  }


}
