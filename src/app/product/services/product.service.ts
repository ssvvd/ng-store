import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {IProduct} from 'src/app/shared/models';
import {PRODUCTS_MOCK} from 'src/app/product/services/product.mock';
import { HttpClient } from '@angular/common/http';
import { Routes } from 'src/app/core/communication/api';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts$(): Observable<IProduct[]>
  { return this.http.get<IProduct[]>(Routes["allProducts"]);}

  public singleProduct$(id:string): Observable<IProduct>
   { return this.http.get<IProduct>(Routes["singleProduct"](id));}
  //{ return this.http.get<IProduct>("https://fakestoreapi.com/products/" + id);}

}
