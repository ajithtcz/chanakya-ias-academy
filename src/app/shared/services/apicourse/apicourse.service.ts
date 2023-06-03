import { Injectable, signal } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { TokenService } from '../Token/token.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicourseService {
  constructor(private apiurl:ApiendpointService,private http:HttpClient,private TokenService:TokenService) { }
  url:any=signal(this.apiurl.apiurl());
  async getcoursedetails(data:any){
    var dd = this.http.get(`${this.url()}/api/getcoursedetails?id=${data}`,{headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }});
    var res = await lastValueFrom(dd);
    return res;
  }
}
