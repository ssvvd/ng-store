import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {AuthService} from 'src/app/core/services/auth.service'
import {IUser} from 'src/app/shared/models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private srv:AuthService,private dialogref:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  public onSubmin(loginform:NgForm)
  {


    this.srv.LogIn(loginform.value);
    console.log(loginform);
    this.dialogref.close();
  }
}
