import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models';
import {ProductService} from 'src/app/product/services/product.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

 // @Input() id:number;

 product:IProduct;

  constructor(private srv:ProductService,private route: ActivatedRoute) { }
  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.srv.singleProduct$(id).subscribe(data=>{
      this.product = data;
      console.log(data);
    })

  }
}
