import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ProfileMenuService } from 'src/app/services/profile-menu.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit, AfterViewInit{
  @ViewChild("profileMenuTrigger") profileMenuTrigger!: MatMenuTrigger

  constructor(private ps: ProfileMenuService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ps.setProfileMenuTrigger(this.profileMenuTrigger)
  }
  
  public onLogout() {
    this.auth.logout(
      {returnTo: 'http://localhost:4200/home'}
    )
  }
}
