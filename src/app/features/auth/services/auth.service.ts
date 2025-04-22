import { Injectable } from '@angular/core';

import { UserDto } from '../../../dto/user.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {


  private _matchedUser: UserDto | undefined;
  private _isAuthenticated: boolean = false;



  constructor(private _router:Router) { }


  openSession(user: UserDto) {
    localStorage.setItem('token', JSON.stringify(user.token));
    localStorage.setItem('userrole', JSON.stringify(user.role));
    localStorage.setItem('profile', JSON.stringify(user.profilePicture));
    localStorage.setItem('name', JSON.stringify(user.name));
  }

  logout() {
    localStorage.clear();
     window.location.href = '/login'
    
  }


  public get matchedUser(): UserDto | undefined {
    return this._matchedUser;
  }
  public set matchedUser(value: UserDto) {
    this._matchedUser = value;
  }

  public get isAuthenticated(): boolean { return this._isAuthenticated }
  public set isAuthenticated(value: boolean) {
    this._isAuthenticated
  }

}
