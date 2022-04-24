import { Injectable } from '@angular/core';
import { AuthService} from '@auth0/auth0-angular'
import { Subscription } from 'rxjs';

export interface UserProfile {
  uid: string,
  email: string,
  email_verified: boolean,
  name: string,
  givenName: string,
  familyName: string,
  picture: string,
  gender: string,
  locale: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userSub: Subscription = new Subscription()
  private userProfile: UserProfile | null = null

  constructor(private auth: AuthService) { 
    // this.auth.user$.subscribe()
  }

}
