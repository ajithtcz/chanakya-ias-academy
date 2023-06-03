import { Component, signal } from '@angular/core';
import { ApistudentprofileService } from 'src/app/shared/services/apistudentprofile/apistudentprofile.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
 studentinfo:any=signal({});
 constructor(private ApistudentprofileService:ApistudentprofileService){}
 ngOnInit(){
   this.getstudentprofile();
 }
 async getstudentprofile(){
  var res:any=await this.ApistudentprofileService.getstudentprofile();

  this.studentinfo.set(res);
  
 }
}
