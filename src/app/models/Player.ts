export class Player {
    nickname: string;
    urlProfile: string;
    team: string;
    score: number;
    urlLogoTeam?: string;

    constructor(nickname: string, urlProfile: string, team: string, score: number, urlLogoTeam?: string) {
        this.nickname = nickname;
        this.team = team;
        this.urlProfile = urlProfile;
        this.score = score;
        this.urlLogoTeam = urlLogoTeam;
    }
}