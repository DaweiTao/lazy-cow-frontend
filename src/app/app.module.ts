import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthModule } from '@auth0/auth0-angular';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileButtonComponent } from './nav-bar/profile-button/profile-button.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MarketComponent } from './market/market.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

import { environment } from 'src/environments/environment';
import { Auth0CallbackComponent } from './auth/auth0-callback/auth0-callback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    ProfileButtonComponent,
    ProfileMenuComponent,
    HomeComponent,
    ChartsComponent,
    WatchlistComponent,
    MarketComponent,
    PageNotFoundComponent,
    ProfileComponent,
    Auth0CallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgScrollbarModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
