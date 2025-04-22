import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import AuthService from '../../../auth/services/auth.service';
import { LoadingService } from 'src/network/core/loading.service';
import { SideNavService } from '../../services/side-nav.service';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  role: any
  profilePicture: any
  name: any
  isOpened = true;
  flag: any
  showNavBar: boolean = false;

  constructor(private _AuthService: AuthService, public loadingService: LoadingService, private _navService: SideNavService,private router:Router) {
   

  }

  ngOnInit(): void {


    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      console.log("sideNav component : ")
    console.log(this._navService.showNavbar);
    this.showNavBar = this._navService.showNavbar;

    });

    if (localStorage.getItem("token") !== null) {
      // this.flag = true


      this.role = JSON.parse(localStorage.getItem('userrole') || 'null');
      this.profilePicture = JSON.parse(localStorage.getItem('profile') || 'null');
      this.name = JSON.parse(localStorage.getItem('name') || 'null');
      console.log(this.role)
      console.log(this.profilePicture)
      console.log(this.name)
    }
    // else {
    //   // this.flag = false
    // }


  }

  toggleNav() {
    this.sidenav.toggle();
  }

  signOut() {
    this.flag = false
    this._AuthService.logout();
  }
}
