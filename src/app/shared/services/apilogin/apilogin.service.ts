import { Injectable, signal } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiloginService {

  constructor(private apiurl:ApiendpointService,private http:HttpClient) { }
  url:any=signal(this.apiurl.apiurl());
  async login(data:any){
   console.log("dd",data);
   var dd=this.http.post(`${this.url()}/api/login`,data);
   var res=await lastValueFrom(dd);
   return res;
  }
}
