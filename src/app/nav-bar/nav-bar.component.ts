import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

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
    this.auth.loginWithRedirect(
      {
        // auth0 api callback
        redirect_uri: environment.auth0LoginCallbackUrl,
        // navigation on success
        appState: {
          target: "/market"
        }
      }
    )
  }

  onClickNavButton() {
    this.ss.closeDrawer()
  }
}
