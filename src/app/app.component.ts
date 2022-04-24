import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideMenuService } from './services/side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'lazy-cow-frontend';
  @ViewChild('appDrawer') drawer!: MatDrawer

  constructor(private ss: SideMenuService) {}

  ngAfterViewInit(): void {
    this.ss.setDrawer(this.drawer)
  }
}
