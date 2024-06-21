import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MasterService } from '../../../services/master.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AbpModule } from 'abp-ng2-module';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss',
  standalone: true,
  imports: [AbpModule, ReactiveFormsModule, MatChipsModule, MatCardModule, MatIconModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatInputModule],
  providers: [ConfirmationService, MessageService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ]

})

export class AdminUserComponent implements OnInit{
  displayedColumns: string[] = ['userName', 'role', 'mobileNo', 'emailId', 'symbol'];
  dataSource = new MatTableDataSource<user_Interface>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  isOpen = false;
  currentID: number = 0;
  form: FormGroup;
  form2: FormGroup;

  constructor(
    private master_Service: MasterService,
    private ConfirmationService: ConfirmationService,
    private MessageService: MessageService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router
   ) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      role: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', Validators.required]
    });

    this.form2 = this.fb.group({
      userName: ['', Validators.required],
      role: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.master_Service.getAllUser().subscribe((res: any) => {
      this.dataSource.data = res.data;
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  buildForm() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      role: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', [Validators.required]],
    });
  }

    buildForm2() {
    this.form2 = this.fb.group({
      userName: ['', [Validators.required]],
      role: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  on_daiLog_Edit() {
      const on_daiLog = document.getElementById("Edit_Form_Modal")
      if (on_daiLog != null) {
        on_daiLog.style.display = 'block';
      }
  }

  off_daiLog_Edit() {
    const off_daiLog = document.getElementById("Edit_Form_Modal");
    if (off_daiLog != null) {
      off_daiLog.style.display = 'none';
    }
  }

  on_daiLog_Create() {
      const on_daiLog = document.getElementById("Create_Form_Modal")
      if (on_daiLog != null) {
        on_daiLog.style.display = 'block';
      }
  }

  off_daiLog_Create() {
    const off_daiLog = document.getElementById("Create_Form_Modal");
    if (off_daiLog != null) {
      off_daiLog.style.display = 'none';
    }
  }

  createUser() {
    this.on_daiLog_Create()
    this.buildForm2();
  }

  Create() {
    this.master_Service.AddUser(this.form.value).subscribe((res: any) => {
      this.toast.success("Create Success");
      this.ngOnInit();
      this.off_daiLog_Create();
      console.log(res)
    })
  }

  updateUser() {
    this.toast.success("Update Success");
    this.off_daiLog_Edit()
  }
  

  editUser(id: any) {
    this.master_Service.getUserById(id).subscribe((response: any) => {
      this.form.patchValue({
        userName: response.data.userName,
        role: response.data.role,
        mobileNo: response.data.mobileNo,
        emailId: response.data.emailId
      });

      this.on_daiLog_Edit()
      this.currentID = id;

      console.log('User ID:', this.currentID);
      console.log('User Data:', response); // Verify fetched user data
    });
  }

  deteleUser(id: any) {
    this.master_Service.deteleUserById(id).subscribe((res: any) => {
      this.toast.error("Detele Success");
      this.ngOnInit();
      console.log(id)
    })
  }

  addUser(){
    this.master_Service.AddUser(this.form2.value).subscribe((res: any) => {
      this.toast.success("Add User Success");
      this.ngOnInit();
      console.log(res)
    })
  }

    navigateToRestaurantFoods() {
    this.router.navigate(['/Control_Panel']) 
  }
}


export interface user_Interface {
  userName: string;
  role: string;
  mobileNo: string;
  emailId: string
}

const ELEMENT_DATA: user_Interface[] = [];