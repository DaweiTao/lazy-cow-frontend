import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer} from '@angular/material/sidenav';
import { SideMenuService } from '../services/side-menu.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private ss: SideMenuService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  onToggleSideMenu() {
    this.ss.toggleDrawer()
  }

  onClickLoginButton() {
    this.ss.closeDrawer()
    this.auth.loginWithRedirect({
      redirect_uri: "http://localhost:4200",
      appState: {
        target: "/watchlist"
      }
    })
  }

  onClickNavButton() {
    this.ss.closeDrawer()
  }
}
