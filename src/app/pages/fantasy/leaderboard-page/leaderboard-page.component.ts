import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.css']
})
export class LeaderboardPageComponent {
  public leaderboard$!: Observable<any>;

    constructor(private dataService: DataService) { }

      ngOnInit(): void {
    this.leaderboard$ = this.dataService.getGeneralLeaderboard();
  }

}
