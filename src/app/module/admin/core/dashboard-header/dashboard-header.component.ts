import { Component } from '@angular/core';
import { TokenService} from '../../shared/services/Token/token.service';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
  constructor(private TokenService:TokenService){}
  resizebody(){
    var body: any = document.querySelector('#my-container');
    var offcanvas: any = document.querySelector('#offcanvasNavbar');

    if (body.classList.contains('my-container')&&offcanvas.classList.contains('show')) {
      body.classList.remove('my-container');
      offcanvas.classList.remove('show');
    } 
    else if(body.classList.contains('my-container')&&!offcanvas.classList.contains('show')){
      offcanvas.classList.add('show');
    }
    else if(!body.classList.contains('my-container')&&!offcanvas.classList.contains('show')) {
      body.classList.add('my-container');
      offcanvas.classList.add('show');
    }
  }
logout(){
    return this.TokenService.logout();
   }
}
