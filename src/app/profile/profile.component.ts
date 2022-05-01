import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular' 
import { Subscription } from 'rxjs';

interface tokenMetaData {
  token: string,
  givenName?: string,
  familyName?: string,
  nickName?: string,
  name?: string,
  picture?: string,
  locale?: string,
  updatedAt?: string,
  email?: string,
  emailVerified?: boolean,
  tokenIssuer?: string,
  uid?: string,
  audience?: string,
  iat?: number,
  exp?: number,
  nonce?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{
  public idTokenSub: Subscription = new Subscription()
  public userMeta: tokenMetaData | null = null
  public accessToken: any

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.idTokenSub = this.auth.idTokenClaims$.subscribe(idToken => {
      if (!idToken) {
        this.userMeta = null
        return
      }
      
      this.userMeta = {
        token: idToken.__raw,
        givenName: idToken.given_name,
        familyName: idToken.family_name,
        nickName: idToken.nickname,
        name: idToken.name,
        picture: idToken.picture,
        locale: idToken.locale,
        updatedAt: idToken.updated_at,
        email: idToken.email,
        emailVerified: idToken.email_verified,
        tokenIssuer: idToken.iss,
        uid: idToken["sub"],
        audience: idToken.aud,
        iat: idToken.iat,
        exp: idToken.exp,
        nonce: idToken.nonce
      }
    })
  }

  ngOnDestroy(): void {
    this.idTokenSub.unsubscribe()
  }

}
