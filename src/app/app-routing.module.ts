import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'create'},
  {path:'create',component:StudentAddComponent},
  {path:'students',component:StudentListComponent},
  {path:'edit/:id',component:StudentEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
