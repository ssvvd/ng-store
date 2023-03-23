import { Component, OnInit ,ViewChild} from '@angular/core';
import {AdminService} from '../admin.service';
import { IProduct } from 'src/app/shared/models';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

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
  constructor(private srv:AdminService,private router: Router) { }

  ngOnInit(): void {
    this.srv.getProducts$().subscribe(data=>{
      console.log(data);
       this. displayedColumns.push ('edit');
       //this.products=data;
       this.products=data;
       this.dataSource = new MatTableDataSource(this.products);
       if(this.paginator) this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id)
  {
    this.router.navigateByUrl ('/admin/edit/' + id);
  }

  private initTable(data:IProduct[]):void
  {

  }

}
