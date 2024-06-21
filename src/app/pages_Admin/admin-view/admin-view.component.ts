import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
})
export class AdminViewComponent {

  constructor(private router: Router) {}

  navigate_Manage_Category() {
    this.router.navigate(['/Admin_Food_Category'])
  }

  navigate_Manage_view_User() {
    this.router.navigate(['/view_User'])
  }
} 
