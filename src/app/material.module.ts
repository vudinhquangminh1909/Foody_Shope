// src/app/material.module.ts
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
