import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from './services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Online_Store';
  get_Role: any [] = []
  registerObj: any = {
  "userId": 0,
  "userName": "",
  "role": "Customer",
  "password": "",
  "mobileNo": "",
  "emailId": "",
  "restaurantId": 0
  }

  loginObj: any = {
    "userName": "",
    "password": ""
  }

  loggedUserData: any;

  constructor(
    private toastr: ToastrService,
    public dialog: MatDialog,
    public master_Serivce: MasterService,
    private router: Router,
  ) {}

  onLogin() {
    const model =document.getElementById('loginModal');
    if(model != null) {
      model.style.display = 'block'
    }
  }

  closeLogin() {
    const model = document.getElementById('loginModal');
    if(model != null) {
      model.style.display = 'none'
    }
  }

  login(){
    this.master_Serivce.onLogin(this.loginObj).subscribe((res: any) => {
      if(res.result) {
        this.closeLogin();
        this.toastr.success("Login Success");
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggedUserData = res.data;
      
        const get_Role = res.data.role
        console.log(get_Role)

        if (get_Role == 'Admin') {
          this.router.navigate(['/Control_Panel']);
        } else {
          this.router.navigate(['/home']);
        }
      }
      else {
        this.toastr.error("Login Error");
      }
    })
  }

  onLogoFF() {
    localStorage.removeItem('zomato_user')
    this.loggedUserData = null;
    this.router.navigate(['/home']);
  }

  onRegister() {
    const model = document.getElementById('registerModal');
    if(model != null) {
      model.style.display = 'block';
    }
  }

  closeRegister(){
    const model = document.getElementById('registerModal');
    if(model != null) {
      model.style.display = 'none';
    }
  }

  onSave() {
    this.master_Serivce.onRegister(this.registerObj).subscribe((res: any) => {
      if(res.result) {
        this.closeRegister();
        this.toastr.success("Register Success");
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggedUserData = res.data;
      } else {
        this.toastr.error("Register Error")
      }
    })
  }

    
}
