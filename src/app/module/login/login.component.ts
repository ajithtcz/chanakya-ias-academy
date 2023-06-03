import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiloginService } from 'src/app/shared/services/apilogin/apilogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginformdata: any = signal({});
  constructor(private loginsform: ApiloginService , private router: Router) { }
  async login(data: any) {
    var res: any = await this.loginsform.login(data.value);
    console.log(res);
    if (res.message == "error") {
      alert("Invalid Email or Password");
    }
    else if (res.message == "Successful login."&& res.Role=="Student") {
      localStorage.setItem("cia_token", res.jwt);
       this.router.navigate(['/mycourses']);
    }
    else if (res.message == "Successful login."&& res.Role=="Admin") {
      localStorage.setItem("cia_token", res.jwt);
       this.router.navigate(['/admin/dashboard']);
    }

  }
}
