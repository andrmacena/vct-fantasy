import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {
  public players!: Observable<any>;
  public filterNickname: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.players = this.data.getPlayers().pipe(
      map((response: any) => response.data)
    );
  }

}