import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/env';
import { ApiService } from 'src/network/core/api.service';
import { UserDto } from '../../../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl.users;
  private endPoint = '12b8-74a1-4e4d-91e4';
  constructor(private _ApiService: ApiService) {
  }


  getUsers(): Observable<UserDto[]> {
    return this._ApiService.get<UserDto[]>(this.baseUrl, this.endPoint).pipe(
      map(response => response.map((item: UserDto) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        password: item.password,
        token: item.token,
        profilePicture: item.profilePicture,
        role: item.role
      })))
    );
  }

  getUserByEmailAndPassword(email: string, password: string, users: UserDto[]): UserDto | undefined {
    return users.find(user =>
      user.email === email && user.password === password
    );

  }
}
