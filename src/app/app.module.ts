import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {provideHttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AbpModule } from 'abp-ng2-module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailProductsComponent,
  ],
  imports: [
MatIconModule,
MatButtonModule,
MatToolbarModule,
MatCardModule,
MatFormFieldModule,
MatProgressBarModule,
MatChipsModule,
MatMenuModule,
ConfirmDialogModule,
AbpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  }),
  FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
