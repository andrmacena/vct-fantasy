import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {
  public players!: Observable<any[]>;

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.players = this.data.getPlayers();
  }

}
