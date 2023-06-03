import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistreamService } from 'src/app/shared/services/apistream/apistream.service';
@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent {
pdfData=signal('');
 constructor(private ApistreamService:ApistreamService,private route:ActivatedRoute){ }
 ngOnInit(){
  this.loadPDF();
 }
 async loadPDF(){
  var res:any=await this.ApistreamService.StreamPDF(this.route.snapshot.params['id']);
  if(res.length>0){
  this.pdfData.set(`http://192.168.0.20/may2023/chanakyasiasacademy-backend/api/getpdf?coursename=${this.route.snapshot.params['id']}&v=${this.route.snapshot.queryParams['v']}`);
  }
  else {
    alert("File not Found !")
  }
 }
}
