import { Component, OnInit } from '@angular/core';
import { ProfileMenuService } from 'src/app/services/profile-menu.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {

  constructor(private ps: ProfileMenuService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  onClickProfileButton() {
    this.ps.toggleProfileMenu()
  }
}
