import { Component, OnInit ,ViewChild} from '@angular/core';
import {AdminService} from '../admin.service';
import { IProduct } from 'src/app/shared/models';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/product/services/product.service'
import {MatDialog} from '@angular/material/dialog';
import {ProductformComponent} from "src/app/shared/componenets/productform/productform.component";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id','image', 'description', 'price'];
  public products:IProduct[];
  //public products1:IProduct1[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;
  constructor(public dialog: MatDialog,private srv:AdminService,private router: Router,private srv_prod:ProductService) { }

  ngOnInit(): void {

    this.srv_prod.getProducts$().subscribe(data=>{


      console.log(data);
       this. displayedColumns.push ('edit');
       this.products=data;
       this.dataSource = new MatTableDataSource(this.products);
       if(this.paginator) this.dataSource.paginator = this.paginator;

    });
    this.srv_prod.fetchproducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id)
  {
    this.router.navigateByUrl ('/admin/edit/' + id);
  }

  openNew() {
    const dialogRef = this.dialog.open(ProductformComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private initTable(data:IProduct[]):void
  {

  }

}
