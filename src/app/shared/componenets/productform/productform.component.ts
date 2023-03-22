import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  constructor() { }
  @Input () product:IProduct;
  ngOnInit(): void {
  }

}
