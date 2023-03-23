import { Injectable } from '@angular/core';
import { Subject,Observable, of } from 'rxjs';
import {IProduct} from 'src/app/shared/models';
import {PRODUCTS_MOCK} from 'src/app/product/services/product.mock';
import { HttpClient } from '@angular/common/http';
import { Routes } from 'src/app/core/communication/api';
import { delay } from 'rxjs/internal/operators';
import { StorageService } from 'src/app/core/services/storage.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject$:Subject<IProduct[]>=new Subject();

  constructor(private http:HttpClient,private srv_storage:StorageService) { }

  public fetchproducts():void{
    const existingData:IProduct[]=this.srv_storage.getData('products');
    if(existingData)
    {
      this.productsSubject$.next(existingData);
    }
    else
    of(PRODUCTS_MOCK).pipe(delay(3000)).subscribe(data=>{
      this.srv_storage.setData('products',data);
      this.productsSubject$.next();
   })
  }

  public getProducts$(): Observable<IProduct[]>
  {
    //this.fetchproducts();
    return this.productsSubject$.asObservable();
  }
    //return <Observable<IProduct[]>>of(PRODUCTS_MOCK);}
 // { return this.http.get<IProduct[]>(Routes["allProducts"]);}


  public singleProduct$(id:string): Observable<IProduct>
   { return this.http.get<IProduct>(Routes["singleProduct"](id));}
  //{ return this.http.get<IProduct>("https://fakestoreapi.com/products/" + id);}


}
