import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models';


@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  constructor() { }
  @Input () product:IProduct;
  description:string;
  ngOnInit(): void {
    this.description ="dasdadadasdasd";
  }

}
