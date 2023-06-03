import { Component, HostListener, Input } from '@angular/core';
import { Session } from 'src/app/shared/Class/Session/Session';
import { TokenService } from 'src/app/shared/services/Token/token.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() session: Session;
  constructor(private TokenService:TokenService){
    this.session = new Session();
  }
  @HostListener('window:scroll', [])
  window() {
    var doc = document as any;
    if (document.documentElement.scrollTop > 50) {
      doc.querySelector(".top").classList.add("scrolldown");
    }
    else {
      doc.querySelector(".top").classList.remove("scrolldown");
    }
  }
  logout(){
    this.TokenService.logout();
  }
}

