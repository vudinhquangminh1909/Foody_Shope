import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MasterService } from '../../../services/master.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-food-category',
  templateUrl: './admin-food-category.component.html',
  styleUrls: ['./admin-food-category.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatCardModule, MatChipsModule, MatIconModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule],
  providers: [ConfirmationService, MessageService]
})

export class AdminFoodCategoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['categoryId', 'categoryName', 'symbol'];
  dataSource = new MatTableDataSource<category_Interface>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private master_Service: MasterService,
    private ConfirmationService: ConfirmationService,
    private toast: ToastrService,
    private MessageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  get_Name_Category: any;
  get_Id_Categofry: any;
  items_Category: any[]= [];

  ngOnInit(): void {
    this.master_Service.getAllCategory().subscribe((res: any) => {
      this.dataSource.data = res.data;
      this.dataSource.paginator = this.paginator;
    });

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any) {
    this.master_Service.deleteFoodCategoriesById(id).subscribe((res: any) => {
      this.get_Id_Categofry = id;

      this.master_Service.getAllCategory().subscribe((res: any) => {
        this.get_Name_Category = res.data;

        const deletedCategory = this.get_Name_Category.find((category: any) => category.categoryId === id);

        if (deletedCategory) {
          this.toast.success(`Delete Success "${deletedCategory.categoryName}"`)
        }
        else {
          this.toast.error(`Delete Error ${deletedCategory.categoryName}`)
        }
      })
    })
  }

  navigateToRestaurantFoods() {
    this.router.navigate(['/Control_Panel']) 
  }

  loadFoodItemsByCategory(id: number) {
    this.master_Service.getAllFoodCategoriesNameByID(id).subscribe((res:any) => {
      this.items_Category = res.data;
      console.log(this.items_Category)
    })
  }

  on_daiLog() {
    const on_daiLog = document.getElementById("loginModal")
    if (on_daiLog != null) {
      on_daiLog.style.display = 'block';
    }
  }

  off_daiLog() {
    const off_daiLog = document.getElementById("loginModal");
    if (off_daiLog != null) {
      off_daiLog.style.display = 'none';
    }
  }

  editCategorys(id: any) {
    this.master_Service.getAllFoodCategoriesNameByID(id).subscribe((res:any) => {
      this.items_Category = res.data;
      console.log(this.items_Category)
    })
  }

}

export interface category_Interface {
  categoryId: number;
  categoryName: string;
}

const ELEMENT_DATA: category_Interface[] = [];
