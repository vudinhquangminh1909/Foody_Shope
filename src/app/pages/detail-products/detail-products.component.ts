import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.scss'
})
export class DetailProductsComponent {

  items: any[] = []
  constructor(
    private master_Service: MasterService,
    private activate: ActivatedRoute,
    private router: Router
  ) {
    this.activate.params.subscribe((res: any)=> {
      // debugger;
      this.loadFoodItemsByCategory(res.categoryname)
    })
  }

  // loadFoodItemsByCategory(id: number) {
  //   this.master_Service.getAllFoodCategoriesName(id).subscribe((res:any) => {
  //     this.items = res.data;
  //     console.log(this.items)
  //   })
  // }

  loadFoodItemsByCategory(id: number) {
    this.master_Service.getAllFoodCategoriesName(id).subscribe((res:any) => {
      if (res.data.length == 0) {
        this.items = [];
        const long = "No data"
        console.log(long)
      }
      else {
        this.items = res.data;
          console.log(this.items)
        }
    })
  }

  navigateToRestaurantFoods() {
    this.router.navigate(["/home"])
  }

}
