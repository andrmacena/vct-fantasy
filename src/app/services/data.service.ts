import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private baseUrl: string = ''
    private header: HttpHeaders = new HttpHeaders;
    constructor(private http: HttpClient) { }



    getPlayers() {

        return this.http.get<any[]>('http://localhost:3000/v1/player')

    }
}