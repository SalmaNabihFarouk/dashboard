import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _matchedUser: UserDto | undefined;


  constructor(private _userService: UserService) { }

  authenticate(email: string, password: string): boolean {

    this._matchedUser = this._userService.getUserByEmailAndPassword(email, password);
    if (this._matchedUser !== undefined) {
      console.log("Worng credentials")
      return true;
    }

    return false;
  }


  openSession(user: UserDto) {
    localStorage.setItem('token', JSON.stringify(user.token));
  }

  logout() {
    localStorage.clear();
  }


  public get matchedUser(): UserDto | undefined {
    return this._matchedUser;
  }
  public set matchedUser(value: UserDto) {
    this._matchedUser = value;
  }

}
