import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private ss: SideMenuService) { }

  ngOnInit(): void {
  }

  public onSelectMenuItem() {
    this.ss.closeDrawer()
  }
}
