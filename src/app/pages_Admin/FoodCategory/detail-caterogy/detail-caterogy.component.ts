import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';
import {AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-detail-caterogy',
  templateUrl: './detail-caterogy.component.html',
  styleUrl: './detail-caterogy.component.scss',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatProgressBarModule, MatCardModule, MatChipsModule, MatIconModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule],
  providers: [ConfirmationService, MessageService]
  // providers: []

})
export class DetailCaterogyComponent {

  items_Category: any[]= [];
  constructor(
    private master_Service: MasterService,
    private activate: ActivatedRoute,
    private router: Router
  ) 
  {
      this.activate.params.subscribe((res: any)=> {
      this.editCategorys(res.categoryname)
    })
  }

  editCategorys(id: any) {
    this.master_Service.getAllFoodCategoriesNameByID(id).subscribe((res:any) => {
      this.items_Category = res.data;
      console.log(this.items_Category)
    })
  }

  navigateToRestaurantFoods() {
    this.router.navigate(['/Admin_Food_Category']) 
  }
}
