import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import AuthService from '../features/auth/services/auth.service';
import { SideNavService } from '../features/layout/services/side-nav.service';

export const authGuard: CanActivateFn = (route, state) => {

  let _sidseNavService = inject(SideNavService)
  _sidseNavService.showNavbar = route.data["showNavbar"]

  console.log("AuthGuard : ")
  console.log(route.data["showNavbar"]);

  if (localStorage.getItem("token") != null) {
    return true;
  }
  else {
    window.location.href = '/login'
    return false;
  }

};
