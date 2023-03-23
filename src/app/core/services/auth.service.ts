import { Injectable } from '@angular/core';
import {IUser} from 'src/app/shared/models/user'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthen$:Subject<boolean>;
  constructor() {

  }

  LogIn(u:IUser)
  {

      console.log(u);
  }

}
