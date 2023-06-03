import { Component } from '@angular/core';
import { DashboardApicoursesService } from '../../shared/services/dashboard-apicourses/dashboard-apicourses.service';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrls: ['./dashboard-courses.component.css']
})
export class DashboardCoursesComponent {
  Tablecolumns: any;
  Tablebodydatas: any;
  formdata: any = [];
  viewDialog:boolean;
  productDialog: boolean;
  submitted: boolean;
  tempfile: any=new Array();
  dyfunform: any;
  formdynamicconfig:any={};
  tablepanelsetting: any = {
    paneltitle: 'Courses Details',
    addrecord: {
      viewactive: true,
      label: 'Add Course Post',
    },
    importrecord: { viewactive: false },
    exportrecord: { viewactive: false },
  };
  formconfig:any = 
    {

      addrecord: {
        title: 'Add Course Post',buttonlabel: 'Save'
      },
      editrecord: { title: 'Edit Course Post',buttonlabel: 'Update' },
      
      fields: [
        { elementtype: 'dropdown', id: 'Course_Short_Name',name: 'Course_Short_Name',label: 'Course Short Name',value:['tnpsc','upsc','police'],create: true,update: true,colname: 'row1'},
        { elementtype: 'input', id: 'Course_Title',name: 'Course_Title',label: 'Course Title',type:'text',create: true,update: true,colname: 'row1'},
        { elementtype: 'file', id: 'Course_Pdf',name: 'Course_Pdf',label: 'Course Pdf',create: true,update: true,colname: 'row1'},
        { elementtype: 'file', id: 'Course_Video',name: 'Course_Video',label: 'Course Video',create: true,update: true,colname: 'row1'},
        { elementtype: 'dropdown', id: 'Course_Status',name: 'Course_Status',label: 'Course Status',create: true,update: true, value:['Active','Inactive'],colname: 'row1'},
      ],
      grid:[{ colsize: 12, colname: "row1" }],
    };

  
    constructor(private DashboardApicoursesService: DashboardApicoursesService, private messageService: MessageService,private confirmationService: ConfirmationService) {}
  ngOnInit() {
    this.getTablecolumns();
    this.getTablebodydatas();
  }
  getTablecolumns() {
    this.Tablecolumns = [
      { field: 'Course_Short_Name', header: 'Course Short Name' },
      { field: 'Course_Title', header: 'Course Title' },
      { field: 'Course_Pdf', header: 'Course Pdf' },
      { field: 'Course_Video', header: 'Course Video'},
      { field: 'Course_Status', header: 'Course Status' },
    ];
  }
  async getTablebodydatas() {
    this.Tablebodydatas = await this.DashboardApicoursesService.admingetallcourse();
  }
  clear(table: Table) {
    table.clear();
  }
  //table crud
  openNew() {

    this.formdata = {};
    this.formdynamicconfig={};
    this.dyfunform = 'savenewproduct';
    this.formdynamicconfig={title:this.formconfig.addrecord.title,buttonlabel:this.formconfig.addrecord.buttonlabel};
    this.submitted = false;
    this.productDialog = true;
  }
  onFileSelected(event: any) {
   
    this.tempfile.push(event.target.files[0]);
    console.log(this.tempfile)
  }
  async savenewproduct(data: any,tempfile:any) {
    console.log(data.value,tempfile)
   var res=await this.DashboardApicoursesService.adminsavecoursedetails(data.value,tempfile);
   this.Tablebodydatas.unshift(res);
   this.productDialog = false;
   this.messageService.add({
    severity: 'success',
    summary: 'Successful',
    detail: 'Post successfully Added',
    life: 3000,
  });
  }
  editProduct(product: any) {

    this.formdata = {};
    this.formdynamicconfig={};
    this.dyfunform='updateproduct';
    this.formdynamicconfig={title:this.formconfig.editrecord.title,buttonlabel:this.formconfig.editrecord.buttonlabel};
    this.formdata = { ...product };
    this.productDialog = true;
  }
  viewProduct(product: any) {
    this.formdata = {};
    this.formdata = { ...product };
    this.viewDialog = true;
  }
  async updateproduct(data: any,file:any,id:any){
  
    if(file.length==0){
      var res=await this.DashboardApicoursesService.adminupdatecoursewithoutfile(data.value,id);
      var index=this.Tablebodydatas.findIndex(d=>d.id==res.id);
      this.Tablebodydatas[index]=res;
      this.productDialog = false;
    }
    else if(file.length>0){
      var res=await this.DashboardApicoursesService.adminupdatecoursewithfile(data.value,file,id);
      var index=this.Tablebodydatas.findIndex(d=>d.id==res.id);
      this.Tablebodydatas[index]=res;
      this.productDialog = false;
    }
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Course Post successfully Updated',
      life: 3000,
    });
  }
  async deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete course post?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        var res=await this.DashboardApicoursesService.admindeletecourse(product.id);
        this.Tablebodydatas = this.Tablebodydatas.filter((val) => val.id !== res);
        this.formdata = {};
        this.productDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Course Post Deleted',
          life: 3000,
        });
      },
    });
  }
}
