import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../../../dto/user.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: UserDto[] = []

  loginForm!: FormGroup;

  errorMessage: string | undefined = undefined;
  

  constructor(private _UserService: UserService, private _AuthService: AuthService, private fb: FormBuilder, private router: Router) {

  }


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z]).{6,}$/)]),
    });
  }



  login() {



    this._UserService.getUsers().subscribe({

      next: (response) => {
        let matchedUser = this._UserService.getUserByEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password, response);

        if (matchedUser !== undefined) {
          this.errorMessage = undefined;
          this._AuthService.openSession(matchedUser);
          window.location.href = '/';
          this._AuthService.isAuthenticated = true;
        }
        else {
          this.errorMessage = "Wrong cedentials please enter valid email and password.";
          this._AuthService.isAuthenticated = false;
        }

      }

    });

  }
}
