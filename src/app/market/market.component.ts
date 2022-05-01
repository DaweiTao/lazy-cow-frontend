import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getPublicMsg() {
    this.http.get(environment.apiUrl + "/msg/public")
      .pipe(take(1))
      .subscribe(res => {
        console.log(res)
      })
  }

  public getPrivateMsg() {
    this.http.get(environment.apiUrl + "/msg/private")
      .pipe(take(1))
      .subscribe(res => {
        console.log(res)
      })
  }
}
