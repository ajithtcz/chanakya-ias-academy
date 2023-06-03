import { Component } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-freematerials',
  templateUrl: './freematerials.component.html',
  styleUrls: ['./freematerials.component.css']
})
export class FreematerialsComponent {
  constructor(private http:HttpClient){}
   ngOnInit(){
    this.getfreetamilmaterials();
   }
   getfreetamilmaterials(){
      this.http.get("http://localhost:4200/assets/image/free materials/Tamil Materials").subscribe((data:any)=>{
        console.log(data)
      });

      
   }
}
