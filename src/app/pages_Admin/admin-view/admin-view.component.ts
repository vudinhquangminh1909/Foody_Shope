import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
})
export class AdminViewComponent{

  loggedUserData: any;

  constructor(
    private router: Router,
    private toast: ToastrService
  ) {}

  navigate_Manage_Category() {
    const localData = localStorage.getItem('zomato_user');
    if(localData == null) {
      this.toast.error("Please Login")
      console.log("hi")
    }
    else {
      this.router.navigate(['/Admin_Food_Category'])
    }
    console.log(localData)
    
  }

  navigate_Manage_view_User() {
    const localData = localStorage.getItem('zomato_user');
      if(localData == null) {
        this.toast.error("Please Login")
        console.log("hi")
      }
      else {
      this.router.navigate(['/view_User'])
    }
    
  }
} 
