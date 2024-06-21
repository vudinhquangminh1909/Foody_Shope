import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAllUser(): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetAllUsers`)
  }

  AddUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiEndPoint}/AddNewUser`, userData)
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetUserByUserId?userId=`+id)
  } 
  
  deteleUserById(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiEndPoint}/DeleteUserByUserId?userId=`+id)
  } 

  updateUser( userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiEndPoint}/UpdateUser/`, userData);
  }

  onLogin(obj: any) : Observable<any> {
    return this.http.post<any>(`${this.apiEndPoint}/Login`, obj)
  }

  onRegister(obj: any) : Observable<any> {
    return this.http.post<any>(`${this.apiEndPoint}/AddNewUser`, obj)
  }

  getAllFoodCategoriesName(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetFoodItemByCategory?categoryId=`+id)
  }

  getRoleUserById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetUserByUserId?userId=`+id)
  }

  deleteFoodCategoriesById(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiEndPoint}/DeleteFoodCategoryById?categoryId=`+id)
  }

  getAllFoodCategoriesNameByID(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/GetFoodItemByCategory?categoryId=`+id)
  }
}
