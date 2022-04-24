import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private drawer!: MatDrawer

  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer
  }

  toggleDrawer() {
    this.drawer.toggle()
  }

  closeDrawer() {
    setTimeout(()=>{
      this.drawer.close()
    }, 300)
  }
}
