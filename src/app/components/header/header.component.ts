import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public sidebaropen:boolean =false;
  ngOnInit(): void {
  }

  public opensidebar():void{

    this.sidebaropen=true;
  }

  public closesidebar():void
  {
    this.sidebaropen=false;
  }

}
