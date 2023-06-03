import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DashboardMainComponent } from './core/dashboard-main/dashboard-main.component';
//admin modules
import { DashboardCoursesComponent } from './module/dashboard-courses/dashboard-courses.component';
import { DashboardStudentsComponent } from './module/dashboard-students/dashboard-students.component';
const routes: Routes = [
  { path: '', component: DashboardMainComponent,
   children: [
     { path: 'dashboard', component: DashboardComponent },
     { path: 'courses', component: DashboardCoursesComponent },
     { path: 'students', component: DashboardStudentsComponent },
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   ]
  },
];
     
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
