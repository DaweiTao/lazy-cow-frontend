import { Injectable } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Injectable({
  providedIn: 'root'
})
export class ProfileMenuService {
  private profileMenuTrigger!: MatMenuTrigger

  constructor() { }

  public setProfileMenuTrigger(trigger: MatMenuTrigger) {
    this.profileMenuTrigger = trigger
  }

  public toggleProfileMenu() {
    this.profileMenuTrigger?.toggleMenu()
  }
}
