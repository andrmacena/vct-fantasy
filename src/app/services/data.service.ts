import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/Player';
import { TokenStorageService } from './token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl: string = 'https://vctfantasy-drezhyathrdgcbgb.brazilsouth-01.azurewebsites.net';
    private header: HttpHeaders = new HttpHeaders();

    constructor(
        private http: HttpClient,
        private tokenStorage: TokenStorageService
    ) {}

    getPlayers() {
        const token = this.tokenStorage.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get<Player[]>(`${this.baseUrl}/v1/players`, { headers });
    }

    getTeam() {
        const token = this.tokenStorage.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get<any[]>(`${this.baseUrl}/v1/teams`, { headers });
    }

    getGeneralLeaderboard() {
        const token = this.tokenStorage.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get<any[]>(`${this.baseUrl}/v1/leaderboard`, { headers });
    }

    getToken(email: string, password: string) {
        return this.http.post(`${this.baseUrl}/v1/authentication/login`, {
            email,
            password
        });
    }

    createUser(email: string, password: string, nickname: string) {
        return this.http.post(`${this.baseUrl}/v1/users`, {
            email,
            password,
            nickname
        });
    }
}