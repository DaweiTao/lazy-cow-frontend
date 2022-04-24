import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0CallbackComponent } from '../auth/auth0-callback/auth0-callback.component';
import { ChartsComponent } from '../charts/charts.component';
import { HomeComponent } from '../home/home.component';
import { MarketComponent } from '../market/market.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProfileComponent } from '../profile/profile.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { EmailVerficationGuardGuard } from './email-verfication-guard.guard';


const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "home",
  },
  { path: "home", component: HomeComponent,
  },
  { path: "auth0", component: Auth0CallbackComponent, 
  },
  { path: "profile", component: ProfileComponent, 
    canActivate: [AuthGuard, EmailVerficationGuardGuard]
  },
  { path: "watchlist", component: WatchlistComponent,
    canActivate: [AuthGuard, EmailVerficationGuardGuard]
  },
  { path: "market", component: MarketComponent, 
    canActivate: [AuthGuard, EmailVerficationGuardGuard]
  },
  { path: "charts", component: ChartsComponent, 
    canActivate: [AuthGuard, EmailVerficationGuardGuard]
  },
  { path: "charts/:symbolSelected", component: ChartsComponent, 
    canActivate: [AuthGuard, EmailVerficationGuardGuard]
  },
  { path: "page-not-found", component: PageNotFoundComponent, 
  },
  { path: "**", redirectTo: "page-not-found", 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
