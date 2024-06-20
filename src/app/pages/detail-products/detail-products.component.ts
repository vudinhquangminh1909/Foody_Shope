import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.scss'
})
export class DetailProductsComponent {

  items: any[] = []
  constructor(
    private master_Service: MasterService,
    private activate: ActivatedRoute
  ) {
    this.activate.params.subscribe((res: any)=> {
      debugger;
      this.loadFoodItemsByCategory(res.categoryname)
    })
  }

  loadFoodItemsByCategory(id: number) {
    this.master_Service.getAllFoodCategoriesName(id).subscribe((res:any) => {
      this.items = res.data;
      console.log(this.items)
    })
  }

}
