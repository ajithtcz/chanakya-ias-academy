import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {
  addclass:any
  ngOnInit(){
   var offcanvas: any = document.querySelector('#offcanvasNavbar');
   if (window.innerWidth >= 992) {
     if(!offcanvas.classList.contains('show')){
       offcanvas.classList.add('show');
     }
   } else {
     if(offcanvas.classList.contains('show')){
     offcanvas.classList.remove('show');
     }
   } 
  }
   @HostListener('window:resize', ['$event'])
   resize(){
     var offcanvas: any = document.querySelector('#offcanvasNavbar');
     var body: any = document.querySelector('#my-container');
     if (window.innerWidth >= 992) {
       if(!offcanvas.classList.contains('show')){
         offcanvas.classList.add('show');
         body.classList.add('my-container');
       }
     } 
     else {
       if(offcanvas.classList.contains('show')){
       offcanvas.classList.remove('show');
       }
     } 
   }
   ngAfterViewInit(){
     var offcanvas: any = document.querySelector('#offcanvasNavbar');
     if (window.innerWidth >= 992) {
       if(!offcanvas.classList.contains('show')){
         offcanvas.classList.add('show');
       }
     } else {
       if(offcanvas.classList.contains('show')){
       offcanvas.classList.remove('show');
       }
     } 
   }
}
