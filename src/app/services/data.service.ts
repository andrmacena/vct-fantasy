import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Player } from "../models/Player";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private baseUrl: string = ''
    private header: HttpHeaders = new HttpHeaders;
    constructor(private http: HttpClient) { }



    getPlayers() {

        return this.http.get<Player[]>('http://localhost:3000/v1/players')

    }

    getTeam() {

        return this.http.get<any[]>('http://localhost:3000/v1/teams')

    }
}