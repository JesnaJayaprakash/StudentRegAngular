import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  
  student: Student;
  studentform: FormGroup;
  students:Observable<Student[]>;


  constructor(private service: StudentService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }
  id:number;
  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.studentform=this.formBuilder.group({
      stu_id: [Validators.required],
      stu_name: [Validators.compose([Validators.required])],
      stu_age: [Validators.compose([Validators.required])],
      stu_gender: [Validators.compose([Validators.required])],
      stu_phno: [Validators.compose([Validators.required])],
      stu_dept: [Validators.compose([Validators.required])],
      stu_address: [Validators.compose([Validators.required])]
    }); 
  
    this.service.getStudent(this.id).subscribe(x=>{
      this.student=x;
    }); 
    
     
  }

  get formControl(){
    return this.studentform.controls;
  
  }

  updateStudents()
    {
      if(this.studentform.invalid)
      {
        return;
      }
  
      this.student.stu_id=this.id;
      this.student.stu_name=this.studentform.controls.stu_name.value;
      this.student.stu_age=this.studentform.controls.stu_age.value;
      this.student.stu_gender=this.studentform.controls.stu_gender.value;
      this.student.stu_phno=this.studentform.controls.stu_phno.value;
      this.student.stu_dept=this.studentform.controls.stu_dept.value;
      this.student.stu_address=this.studentform.controls.stu_address.value;
      this.service.updateStudent(this.id,this.student).subscribe(res=>{
        this.toastr.success('Student Updated');
      });

    }

}

