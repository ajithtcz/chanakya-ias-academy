import { Injectable } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { TokenService } from '../Token/token.service';
import {lastValueFrom} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardApistudentsService {
  constructor(private apiurl:ApiendpointService,private http:HttpClient,private TokenService:TokenService) { }
  Api_url : string = this.apiurl.apiurl();

  //students crud
  async admingetallstudent(){
    var data$ = this.http.get(`${this.Api_url}/api/admingetallstudent`,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async adminsavestudent(data:any,file:File){
    var data$ = this.http.post(`${this.Api_url}/api/adminsavestudent`,data,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }

  async adminupdatestudent(data:any,id:any){
    var data$ = this.http.put(`${this.Api_url}/api/adminupdatestudent`,{data:data,id:id},{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async admindeletestudent(id:any){
    var data$ = this.http.delete(`${this.Api_url}/api/admindeletestudent`,
     {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.TokenService.getAccessToken()}`
       }), 
    body: {id:id}});
    var response : any = await lastValueFrom(data$);
    return response;
  }
}
