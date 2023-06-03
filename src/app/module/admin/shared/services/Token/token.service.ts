import { Injectable, Input, signal } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenkey:any= signal("cia_token");
  constructor(private router : Router) {
   
  }
 getAccessToken() {
   return localStorage.getItem(this.tokenkey());
 }
 getUserDetails() {
   const token = this.getAccessToken();
   let payload;
   if (token) {
     payload = token.split('.')[1];
     payload = window.atob(payload);
     return JSON.parse(payload);
   } else {
     return null;
   }
 }
 isLoggedIn(): boolean {
   let authToken = localStorage.getItem(this.tokenkey());
   return (authToken !== null) ? true : false;
 }
 logout() {
   if (localStorage.removeItem(this.tokenkey()) !== null) {
     this.router.navigate(['/login']);
   }
 }
}
