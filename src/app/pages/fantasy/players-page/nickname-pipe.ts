import { Pipe, PipeTransform } from '@angular/core';
import { Player } from 'src/app/models/Player';

@Pipe({
  name: 'filterByNickname',
  pure: false
})
export class FilterByNicknamePipe implements PipeTransform {

  transform(players: Player[] | null, filter: string): Player[] {
    if (!players) return [];
    if (!filter || filter.trim() === '') return players;

    const term = filter.trim().toLowerCase();

    return players.filter(player =>
      player.nickname.toLowerCase().startsWith(term)
    );
  }

}