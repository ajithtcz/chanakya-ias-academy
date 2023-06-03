import { Injectable, signal } from '@angular/core';
import { ApiendpointService } from '../apiendpoint/apiendpoint.service';
import { TokenService } from '../Token/token.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApistreamService {
  constructor(private apiurl:ApiendpointService,private http:HttpClient,private TokenService:TokenService) { }
  url:any=signal(this.apiurl.apiurl());
  async StreamPDF(id:any){
    const options = {
      headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }
    };
    var dd=this.http.get(`${this.url()}/api/getpdfaccess?id=${id}`,options);
    var res=await lastValueFrom(dd);
    return res;
  }
  async StreamVideo(id:any){
    const options:any = {
      headers: { Authorization: `Bearer ${this.TokenService.getAccessToken()}` }
    };
    var dd=this.http.get(`${this.url()}/api/playvideoaccess?id=${id}`,options);
    var res=await lastValueFrom(dd);
    return res;
  }
}
