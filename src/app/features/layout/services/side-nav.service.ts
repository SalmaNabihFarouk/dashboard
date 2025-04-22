import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private _showNavbar: boolean = false;
  
  public get showNavbar(): boolean {
    return this._showNavbar;
  }
  public set showNavbar(value: boolean) {
    this._showNavbar = value;
  }

}
