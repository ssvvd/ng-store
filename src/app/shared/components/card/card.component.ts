import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from '../../models';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() product?:IProduct;
  ngOnInit(): void {
  }

}
