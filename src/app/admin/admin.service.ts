import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProduct} from 'src/app/shared/models';
import { Observable, of } from 'rxjs';
import { Routes } from 'src/app/core/communication/api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public getProducts$(): Observable<IProduct[]>
  { return this.http.get<IProduct[]>(Routes["allProducts"]);}
}
