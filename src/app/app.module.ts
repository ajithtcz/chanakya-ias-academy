import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//pdf and video stream module
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
//module componnets
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { LoginComponent } from './module/login/login.component';
import { ContactComponent } from './module/contact/contact.component';
import { TnpscComponent } from './module/tnpsc/tnpsc.component';
import { GalleryComponent } from './module/gallery/gallery.component';
import { RegisterComponent } from './module/register/register.component';
import { UpscComponent } from './module/upsc/upsc.component';
import { RrbComponent } from './module/rrb/rrb.component';
import { PoliceComponent } from './module/police/police.component';
import { NeetComponent } from './module/neet/neet.component';
import { BankComponent } from './module/bank/bank.component';
import { TetComponent } from './module/tet/tet.component';
import { PgtrbComponent } from './module/pgtrb/pgtrb.component';
import { PolicyComponent } from './module/policy/policy.component';
import { EnquirynowComponent } from './module/enquirynow/enquirynow.component';
import { MyCoursesComponent } from './module/studentprofile/my-courses/my-courses.component';
import { CoursesviewComponent } from './module/courses/coursesview/coursesview.component';
import { PdfviewComponent } from './module/courses/pdfview/pdfview.component';
import { VideoviewComponent } from './module/courses/videoview/videoview.component';
import { MainComponent } from './core/main/main.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    TnpscComponent,
    GalleryComponent,
    RegisterComponent,
    UpscComponent,
    RrbComponent,
    PoliceComponent,
    NeetComponent,
    BankComponent,
    TetComponent,
    PgtrbComponent,
    PolicyComponent,
    EnquirynowComponent,
    MyCoursesComponent,
    CoursesviewComponent,
    PdfviewComponent,
    VideoviewComponent,
    MainComponent,
  

  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
