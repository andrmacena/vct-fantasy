import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './pages/account/sign-up-page/sign-up-page.component';
import { PlayersPageComponent } from './pages/fantasy/players-page/players-page.component';
import { TeamPageComponent } from './pages/fantasy/team-page/team-page.component';
import { LeaderboardPageComponent } from './pages/fantasy/leaderboard-page/leaderboard-page.component';
import { HomePageComponent } from './pages/fantasy/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.modules';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    LoginPageComponent,
    NavbarComponent,
    ResetPasswordPageComponent,
    SignUpPageComponent,
    PlayersPageComponent,
    TeamPageComponent,
    LeaderboardPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
