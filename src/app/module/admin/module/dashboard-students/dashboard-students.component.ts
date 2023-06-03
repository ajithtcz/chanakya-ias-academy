import { Component } from '@angular/core';
import { DashboardApistudentsService } from '../../shared/services/dashboard-apistudents/dashboard-apistudents.service';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
})
export class DashboardStudentsComponent {
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
    paneltitle: 'Student Details',
    addrecord: {
      viewactive: true,
      label: 'New Student',
    },
    importrecord: { viewactive: false },
    exportrecord: { viewactive: false },
  };
  formconfig:any = 
    {

      addrecord: {
        title: 'New Student',buttonlabel: 'Save'
      },
      editrecord: { title: 'Edit Student',buttonlabel: 'Update' },
      
      fields: [
        { elementtype: 'input', id: 'Name',name: 'Name',label: 'Name',type:'text',create: true,update: true,colname: 'row1'},
        { elementtype: 'input', id: 'Email',name: 'Email',label: 'Email',type:'email',create: true,update: true,colname: 'row1'},
        { elementtype: 'input', id: 'Mobilenumber',name: 'Mobilenumber',label: 'Mobilenumber',type:'text',create: true,update: true,colname: 'row1'},
        { elementtype: 'input', id: 'Password',name: 'Password',label: 'Password',type:'password',create: true,update: true,colname: 'row1'},
        { elementtype: 'multiselect', id: 'Enrolled_Courses',name: 'Enrolled_Courses',label: 'Enrolled Courses',create: true,update: true, value:['tnpsc','upsc','police'],colname: 'row1'},
        { elementtype: 'dropdown', id: 'Status',name: 'Status',label: 'Status',create: true,update: true, value:['Active','Inactive'],colname: 'row1'},
      ],
      grid:[{ colsize: 12, colname: "row1" }],
    };

  
    constructor(private DashboardApistudentsService: DashboardApistudentsService, private messageService: MessageService,private confirmationService: ConfirmationService) {}
  ngOnInit() {
    this.getTablecolumns();
    this.getTablebodydatas();
  }
  getTablecolumns() {
    this.Tablecolumns = [
      { field: 'Student_id', header: 'Student ID' },
      { field: 'Name', header: 'Name',width:"120px"},
      { field: 'Email', header: 'Email',width:"120px" },
      { field: 'Mobilenumber', header: 'Mobilenumber',width:"120px"},
      { field: 'Password', header: 'Password',width:"120px"},
      { field: 'Role', header: 'Role',width:"120px"},
      { field: 'Enrolled_Courses', header: 'Enrolled Courses',width:"120px" ,formattype:"jsonparse"},
      { field: 'Status', header: 'Status',width:"120px"},
    ];
  }
  async getTablebodydatas() {
    this.Tablebodydatas = await this.DashboardApistudentsService.admingetallstudent();
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
   var res=await this.DashboardApistudentsService.adminsavestudent(data.value,tempfile);
   this.Tablebodydatas.unshift(res);
   this.productDialog = false;
   this.messageService.add({
    severity: 'success',
    summary: 'Successful',
    detail: 'New Student successfully Added',
    life: 3000,
  });
  }
  editProduct(product: any) {
console.log(product['Enrolled_Courses'])
    this.formdata = {};
    this.formdynamicconfig={};
    this.dyfunform='updateproduct';
    this.formdynamicconfig={title:this.formconfig.editrecord.title,buttonlabel:this.formconfig.editrecord.buttonlabel};
    this.formdata = { ...product,...{Enrolled_Courses:product['Enrolled_Courses'].split(',')} };
    this.productDialog = true;
  }
  viewProduct(product: any) {
    this.formdata = {};
    this.formdata = { ...product };
    this.viewDialog = true;
  }
  async updateproduct(data: any,file:any,id:any){
  console.log(data.value)

     var res=await this.DashboardApistudentsService.adminupdatestudent(data.value,id);
      var index=this.Tablebodydatas.findIndex(d=>d.id==res.id);
      this.Tablebodydatas[index]=res;
      this.productDialog = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Student profile successfully Updated',
      life: 3000,
    });
  }
  async deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this Student profile?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        var res=await this.DashboardApistudentsService.admindeletestudent(product.id);
        this.Tablebodydatas = this.Tablebodydatas.filter((val) => val.id !== res);
        this.formdata = {};
        this.productDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student profile successfully Deleted',
          life: 3000,
        });
      },
    });
  }
  multidata:any=[];
  search3(data: any,field: any){
    console.log(data)
    var arr = new Array();
    for (let i = 0; i < data.length; i++) {
      if (data[i] != undefined) {
        arr.push({ [field]: data[i] });
      }

    }
    this.multidata[field] = arr

  }
}
