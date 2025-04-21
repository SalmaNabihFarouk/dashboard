import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: UserDto[] = []

  loginForm!: FormGroup;

  errorMessage: string | undefined = undefined;

  constructor(private _UserService: UserService, private _LoginService: LoginService, private fb: FormBuilder, private router: Router) {

  }


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }



  login() {

    let isAuthenticated = this._LoginService.authenticate(this.loginForm.value.email, this.loginForm.value.password)

    if (!isAuthenticated) {
      this.errorMessage = "Wrong cedentials please enter valid email and password.";
    }

    this.errorMessage = undefined;
    this.router.navigate(['/posts']);
  }
}
