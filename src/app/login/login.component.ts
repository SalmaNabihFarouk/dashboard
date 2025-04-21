import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: UserDto[] = []

  loginForm!: FormGroup;

  errorMessage: string | undefined = undefined;

  constructor(private _UserService: UserService, private fb: FormBuilder,private router: Router) {

  }


  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if (token) {

      this.router.navigate(['posts']);
    } else {
    
      this.router.navigate(['login']);
    }
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }



  login() {

    this._UserService.getUsers().subscribe({
      next: (response) => {

        console.log(response);
        this.users = response
      }


    });



    const matchedUser = this.users.find(user =>
      user.email === this.loginForm.value.email && user.password === this.loginForm.value.password
    );

    if (matchedUser === undefined) {
      console.log("Worng credentials")
      this.errorMessage = "Wrong cedentials please enter valid email and password.";
    }
    else {
      this.errorMessage = undefined;
      console.log("Correct credentials")
      localStorage.setItem('token', JSON.stringify(matchedUser.token));

 
      this.router.navigate(['/posts']);

    }
  }

}
