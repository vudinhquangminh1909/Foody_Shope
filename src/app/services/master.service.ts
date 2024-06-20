import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiEndPoint = '/api/zomato';
  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetAllFoodCategory`)
  }

  onLogin(obj: any) : Observable<any> {
    return this.http.post<any>(`${this.apiEndPoint}/Login`, obj)
   }
}
