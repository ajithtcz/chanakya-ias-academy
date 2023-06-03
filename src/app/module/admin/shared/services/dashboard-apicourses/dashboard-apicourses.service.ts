import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { TokenService } from '../Token/token.service';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardApicoursesService {
  constructor(private apiurl:ApiendpointService,private http:HttpClient,private TokenService:TokenService) { }
  Api_url : string = this.apiurl.apiurl();

  //course crud
  async admingetallcourse(){
    var data$ = this.http.get(`${this.Api_url}/api/admingetallcourse`,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async adminsavecoursedetails(data:any,file:File){
    var datats=new FormData();
    datats.append('Course_Short_Name',data.Course_Short_Name);
    datats.append('Course_Title',data.Course_Title);
    datats.append('Course_Pdf',file[0]);
    datats.append('Course_Video',file[1]);
    datats.append('Course_Status',data.Course_Status);
    var data$ = this.http.post(`${this.Api_url}/api/savecoursedetails`,datats,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async adminupdatecoursewithfile(data:any,file:File,id:any){
    var datats=new FormData();
    datats.append('Course_Short_Name',data.Course_Short_Name);
    datats.append('Course_Title',data.Course_Title);
    datats.append('Course_Pdf',file[0]);
    datats.append('Course_Video',file[1]);
    datats.append('Course_Status',data.Course_Status);
    datats.append('id',id);
    var data$ = this.http.post(`${this.Api_url}/api/adminupdatecoursewithfile`,datats,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async adminupdatecoursewithoutfile(data:any,id:any){
    var data$ = this.http.put(`${this.Api_url}/api/adminupdatecoursewithoutfile`,{data:data,id:id},{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var response : any = await lastValueFrom(data$);
    return response;
  }
  async admindeletecourse(id:any){
    var data$ = this.http.delete(`${this.Api_url}/api/admindeletecourse`,
     {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.TokenService.getAccessToken()}`
       }), 
    body: {id:id}});
    var response : any = await lastValueFrom(data$);
    return response;
  }

}
