import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() isOpen:boolean=false;
  @Output() onCloseSidebar:EventEmitter<void>=new EventEmitter();

  ngOnInit(): void {
  }
  goToAdmin()
  {
    this.router.navigateByUrl ('/admin');
  }

  public closesidebar():void
  {
  this.onCloseSidebar.emit();
  }

  public Exit()
  {
    this.onCloseSidebar.emit();
  }
}
