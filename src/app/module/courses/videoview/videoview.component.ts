import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApistreamService } from 'src/app/shared/services/apistream/apistream.service';
@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css']
})
export class VideoviewComponent {
  videoData:any=signal('');
  videoactive:any=signal(false)
  constructor(private ApistreamService:ApistreamService,private route:ActivatedRoute,private router:Router ){ 
    effect(()=>this.videoData())
  }
   async ngOnInit(){
    
    this.loadPDF();
    this.playv();
   }
   async loadPDF(){
   
    var res:any=await this.ApistreamService.StreamVideo(this.route.snapshot.params['id']);
    if(res.length>0){
      this.videoactive.set(true)
    }
    else{
      this.router.navigate(['/mycourses'])
      this.videoactive.set(false)
    }

   }
   playv(){
    this.videoData.set(`http://192.168.0.20/may2023/chanakyasiasacademy-backend/api/playvideo?coursename=${this.route.snapshot.params['id']}&v=${this.route.snapshot.queryParams['v']}`);
   }
}
