export class Player {
    id: number;
    nickname: string;
    pathProfile: string;
    rating: number;
    acs: number;
    kills: number;
    deaths: number;
    assists: number;
    kast: number;
    adr: number;
    fb: number;
    fd: number;
    score: number;


    constructor(nickname: string, pathProfile: string, score: number, id: number, rating: number, acs: number, kills: number, deaths: number, assists: number, kast: number, adr: number, fb: number, fd: number) {
        this.nickname = nickname;
        this.pathProfile = pathProfile;
        this.score = score;
        this.id = id;
        this.rating = rating;
        this.acs = acs;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.kast = kast;
        this.adr = adr;
        this.fb = fb;
        this.fd = fd;
    }
}