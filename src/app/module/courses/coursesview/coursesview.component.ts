import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicourseService } from 'src/app/shared/services/apicourse/apicourse.service';

@Component({
  selector: 'app-coursesview',
  templateUrl: './coursesview.component.html',
  styleUrls: ['./coursesview.component.css']
})
export class CoursesviewComponent {
 coursetitle:any=signal(this.route.snapshot.params["id"]);
 coursedata:any=signal([]);
 constructor(private route : ActivatedRoute,private ApicourseService:ApicourseService,private router:Router ){
  //console.log(this.route.snapshot.params["id"])
  effect(()=>{
    this.getcouserdetails();
   })
  }
  async getcouserdetails(){
    var res:any=await this.ApicourseService.getcoursedetails(this.route.snapshot.params["id"]);
    if(res.error=="Unauthorized"){
     this.router.navigate(['/mycourses']);
    }
    else{
    this.coursedata.set(res);
    }
  }
}
