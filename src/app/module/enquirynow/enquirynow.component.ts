import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApienquiryService } from 'src/app/shared/services/apienquiry/apienquiry.service';
@Component({
  selector: 'app-enquirynow',
  templateUrl: './enquirynow.component.html',
  styleUrls: ['./enquirynow.component.css']
})
export class EnquirynowComponent {
  enquiryformdata: any = {};
  constructor(private enquiry: ApienquiryService ,private route : ActivatedRoute) { 
    /*console.log(this.route.snapshot.params["id"])*/
  }
  async enquirynow(data: any) {
   var res:any= await this.enquiry.enquirynow ({...data.value,...{Enrolled_Courses:[this.route.snapshot.params["id"]]}});
   if(res.message=="Successfully enrolled"){
      alert("Your registration has been successfully received. Please wait for our confirmation, as we will be calling you soon.")
   }
  }
}
