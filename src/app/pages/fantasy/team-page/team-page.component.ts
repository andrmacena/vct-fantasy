import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent  implements OnInit {
  public team!: Observable<any[]>;

  constructor(private dataService: DataService) { } 
  ngOnInit(): void {
    this.team = this.dataService.getTeam();
  }
}
