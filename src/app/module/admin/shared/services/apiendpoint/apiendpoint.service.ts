import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiendpointService {
  apiurl(){
    var url="http://192.168.0.20/may2023/chanakyasiasacademy-backend";
    return url;
  }
}
