import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
//pipes
import { JsonParsePipe } from './shared/pipes/jsonParse/json-parse.pipe';
//shared modules
import { SharedPackageModule } from 'src/app/shared-package/shared-package.module';
//core components
import { DashboardFooterComponent } from './core/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './core/dashboard-header/dashboard-header.component';
import { DashboardMainComponent } from './core/dashboard-main/dashboard-main.component';
import { DashboardSidebarComponent } from './core/dashboard-sidebar/dashboard-sidebar.component';
//module components
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DashboardCoursesComponent } from './module/dashboard-courses/dashboard-courses.component';
import { DashboardStudentsComponent } from './module/dashboard-students/dashboard-students.component';


@NgModule({
  declarations: [
    JsonParsePipe,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardMainComponent,
    DashboardSidebarComponent,
    DashboardComponent,
    DashboardCoursesComponent,
    DashboardStudentsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedPackageModule,
    
  ]
})
export class AdminModule { }
