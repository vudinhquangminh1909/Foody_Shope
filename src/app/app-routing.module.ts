import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { AdminViewComponent } from './pages_Admin/admin-view/admin-view.component';
import { AdminFoodCategoryComponent } from './pages_Admin/FoodCategory/admin-food-category/admin-food-category.component';
import { DetailCaterogyComponent } from './pages_Admin/FoodCategory/detail-caterogy/detail-caterogy.component';
import { AdminUserComponent } from './pages_Admin/User/admin-user/admin-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Detail_Products/:categoryname',
    component: DetailProductsComponent
  },
  {
    path: 'Control_Panel',
    component: AdminViewComponent
  },
  {
    path: 'Admin_Food_Category',
    component: AdminFoodCategoryComponent
  },
  {
    path: 'Admin_Food_Category/:categoryname',
    component: DetailCaterogyComponent
  },
  {
    path: 'Detail_Caterogy',
    component: DetailCaterogyComponent
  },
  {
    path: 'view_User',
    component: AdminUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
