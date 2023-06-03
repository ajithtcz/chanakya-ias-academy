import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule} from 'primeng/dataview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    DialogModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    DataViewModule,
    AutoCompleteModule,
    CheckboxModule,
    MultiSelectModule
    
  
  ],
  providers: [ConfirmationService, MessageService],
  exports:[
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    DialogModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    DataViewModule,
    AutoCompleteModule,
    CheckboxModule,
    MultiSelectModule
  ]
})
export class SharedPackageModule { }
