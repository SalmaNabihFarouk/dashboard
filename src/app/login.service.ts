import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: UserDto[] = []

  private _matchedUser: UserDto | undefined;

  
  constructor(_userService: UserService) { }

  authenticate(email: string, password: string): boolean {

    this._matchedUser = this.getUserByEmailAndPassword(email, password);
    if (this._matchedUser !== undefined) {
      console.log("Worng credentials")
      return true;
    }

    return false;
  }

  getUserByEmailAndPassword(email: string, password: string): UserDto | undefined {
    return this.users.find(user =>
      user.email === email && user.password === password
    );
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
