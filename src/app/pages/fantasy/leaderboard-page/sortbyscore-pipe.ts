import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByScore',
  pure: true
})
export class SortByScorePipe implements PipeTransform {

  transform(players: any[]): any[] {
    if (!players || players.length === 0) return [];

    return [...players].sort((a, b) => b.totalScore - a.totalScore);
  }

}