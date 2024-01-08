import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { HomePageComponent } from './pages/fantasy/home-page/home-page.component';
import { SignUpPageComponent } from './pages/account/sign-up-page/sign-up-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { LeaderboardPageComponent } from './pages/fantasy/leaderboard-page/leaderboard-page.component';
import { PlayersPageComponent } from './pages/fantasy/players-page/players-page.component';
import { TeamPageComponent } from './pages/fantasy/team-page/team-page.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
    {
        path: '',
        component: FramePageComponent,
        canActivate: [AuthService],
        children: [
            { path: '', component: HomePageComponent },
            { path: 'leaderboard', component: LeaderboardPageComponent },
            { path: 'players', component: PlayersPageComponent },
            { path: 'myteam', component: TeamPageComponent }
        ]

    },
    {
        path: 'account',
        component: FramePageComponent,
        children: [
            { path: 'profile', component: HomePageComponent }
        ]

    },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignUpPageComponent },
    { path: 'reset-password', component: ResetPasswordPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }