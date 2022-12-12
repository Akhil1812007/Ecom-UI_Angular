import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http:HttpClient) { 

  }
   apiBaseUrl=environment.apiBaseUrl;
  getAllProductsDetails():Observable<product[]>{
    return this.http.get<product[]>(this.apiBaseUrl+'/Product');
  }
  getProductById(id:number):Observable<product>{
    return this.http.get<product>(this.apiBaseUrl+'/Product/'+id)
    
  }
  addNewProduct(newProduct:product) :Observable<product>{
    return this.http.post<product>(this.apiBaseUrl+'/Product/product',newProduct);
  }
  deleteProduct(id:number){
    return this.http.delete(this.apiBaseUrl+'/Product/'+id);

  }
  editProduct(productToEdit:product):Observable<product>{
    return this.http.put<product>(this.apiBaseUrl+'/Product/',productToEdit);
  }
}
