import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isOpened = true;

  constructor(private _loginService: LoginService) { }

  toggleNav() {
    this.sidenav.toggle();
  }

  signOut() {
    this._loginService.logout();
  }
}
