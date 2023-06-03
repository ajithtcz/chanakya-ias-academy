import { Injectable, signal } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApienquiryService {
  constructor(private apiurl:ApiendpointService,private http:HttpClient) { }
  url:any= signal(this.apiurl.apiurl());
  async enquirynow(data:any){
    var response=this.http.post(`${this.url()}/api/enquiry`,data);
    var res=await lastValueFrom(response);
    return res;
  }
  }
