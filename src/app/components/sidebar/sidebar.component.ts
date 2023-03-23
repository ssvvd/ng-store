import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent} from 'src/app/components/login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }
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
    //this.onCloseSidebar.emit();
    this.isOpen=false;
  }
  Login()
  {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
