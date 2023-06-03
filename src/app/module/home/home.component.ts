import { Component } from '@angular/core';
import { ApiloginService } from 'src/app/shared/services/apilogin/apilogin.service';
import Swiper, { Navigation, Pagination,Autoplay } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 
    loginformdata:any={};
    checkuser:boolean=true;
    data:any;
    
    constructor(private logins:ApiloginService){}
    ngOnInit(){
      this.datas();
      const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination,Autoplay],
      direction:"horizontal",
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
    async login(data:any){
     console.log(data.value);
     var res=this.logins.login(data.value);
     this.data=[{name:"dssd"},{name:"dssddd"}];
    }
    datas(){
      this.data=[{name:"dsssasassd"},{name:"ss"}];
    }
}
