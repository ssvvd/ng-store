import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product/services/product.service'
import { IProduct } from 'src/app/shared/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products:IProduct[]=[];
  constructor(private products_service:ProductService) { }

  ngOnInit() {
    this.products_service.getProducts$().subscribe(data=>{
      console.log(data);
       this.products=  data;
    });

  }

  ngOnDestroy(): void {

  }

}
