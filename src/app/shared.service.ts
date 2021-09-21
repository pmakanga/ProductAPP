import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiUrl = "http://localhost:15400/api";

  constructor(private http: HttpClient) { }

  getProductCategory(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/ProductCategories');
  }

  addProductCategory = (val: any) => {
    return this.http.post(this.apiUrl + '/ProductCategories', val);
  }

  updateCategory = (category: any) => {
    return this.http.put(this.apiUrl + '/ProductCategories', category);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/Products');
  }

  addProduct = (val: any) => {
    return this.http.post(this.apiUrl + '/Products', val);
  }


  updateProduct = (product: any) => {
    return this.http.put(this.apiUrl + '/Products', product);
  }

  deleteProduct = (id: string) =>  {
    return this.http.delete(this.apiUrl + '/Employees/' + id);
  }


}
