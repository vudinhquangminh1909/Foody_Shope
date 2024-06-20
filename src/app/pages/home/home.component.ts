import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{

  list_Category: any[] = [];

  constructor(
    private master_Service: MasterService,
    private toast_Service: ToastrService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) 
  {}

  ngOnInit(): void {
    this.load_Categorys();
  }

  load_Categorys() {
    this.master_Service.getAllCategory().subscribe((res: any) => {
      this.list_Category = res.data;
      console.log(this.list_Category);
      this.cdr.detectChanges();
    })
  }


}
