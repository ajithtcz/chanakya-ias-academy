import { NgModule } from '@angular/core';
import { AuthguardService } from './shared/services/authguard/authguard.service';


import { RouterModule, Routes } from '@angular/router';
//main component
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { LoginComponent } from './module/login/login.component';
import { ContactComponent } from './module/contact/contact.component';
import { TnpscComponent } from './module/tnpsc/tnpsc.component';
import { GalleryComponent } from './module/gallery/gallery.component';
import { RegisterComponent } from './module/register/register.component';
import { RrbComponent } from './module/rrb/rrb.component';
import { UpscComponent } from './module/upsc/upsc.component';
import { NeetComponent } from './module/neet/neet.component';
import { PoliceComponent } from './module/police/police.component';
import { TetComponent } from './module/tet/tet.component';
import { PolicyComponent } from './module/policy/policy.component';
import { BankComponent } from './module/bank/bank.component';
import { PgtrbComponent } from './module/pgtrb/pgtrb.component';
import { EnquirynowComponent } from './module/enquirynow/enquirynow.component';
//student profile
import { MyCoursesComponent } from './module/studentprofile/my-courses/my-courses.component';
 //coursesview
 import { CoursesviewComponent } from './module/courses/coursesview/coursesview.component';
 import { PdfviewComponent } from './module/courses/pdfview/pdfview.component';
 import { VideoviewComponent } from './module/courses/videoview/videoview.component';
 import { FreematerialsComponent } from './module/courses/freematerials/freematerials.component';
const routes: Routes = [
  {path:'',component:MainComponent,
     children:[
      {path:"home",component:HomeComponent,title:"Chanakya's ias academy-Home"},
      {path:"about",component:AboutComponent, title:"Chanakya's ias academy-Aboutus"},
      {path:"login",component:LoginComponent , title:"Chanakya's ias academy-Login"},
      {path:"contact",component:ContactComponent, title:"Chanakya's ias academy-Contact"},
      {path:"tnpsc",component:TnpscComponent, title:"Chanakya's ias academy-TNPSC"},
      {path:"gallery",component:GalleryComponent, title:"Chanakya's ias academy-Newsroom"},
      {path:"register",component:RegisterComponent, title:"Chanakya's ias academy-Register"},
      {path:"rrb",component:RrbComponent, title:"Chanakya's ias academy-RRB"},
      {path:"upsc",component:UpscComponent, title:"Chanakya's ias academy-UPSC"},
      {path:"neet",component:NeetComponent, title:"Chanakya's ias academy-NEET"},
      {path:"police",component:PoliceComponent, title:"Chanakya's ias academy-Police"},
      {path:"tet",component:TetComponent, title:"Chanakya's ias academy-TET"},
      {path:"policy",component:PolicyComponent, title:"Chanakya's ias academy-Policy"},
      {path:"bank",component:BankComponent, title:"Chanakya's ias academy - Bank"},
      {path:"pgtrb",component:PgtrbComponent, title:"Chanakya's ias academy - PGTRP"},
          {path:"freematerials",component:FreematerialsComponent, title:"Chanakya's ias academy - FreeMaterials"},
      {path:"enquiry/:id",component:EnquirynowComponent, title:"Chanakya's ias academy - Enquiry"},
    //student profile
    {path:"mycourses",component:MyCoursesComponent, title:"Chanakya's ias academy - My Courses", canActivate:[AuthguardService],data:{roles:['Student']}},
     //coursesview
     {path:"coursesview/:id",component:CoursesviewComponent, title:"Chanakya's ias academy - coursesview",canActivate:[AuthguardService],data:{roles:['Student']}},
     {path:"pdfview/:id",component:PdfviewComponent, title:"Chanakya's ias academy - PDF",canActivate:[AuthguardService],data:{roles:['Student']}},
     {path:"videoview/:id",component:VideoviewComponent, title:"Chanakya's ias academy - PDF",canActivate:[AuthguardService],data:{roles:['Student']}},
    {path:"",redirectTo:"/home",pathMatch:"full"},
     ]
},
  


{path: 'admin',loadChildren:()=>import('./module/admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthguardService],data:{roles:['Admin']},}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
