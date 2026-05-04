import { Component, inject } from '@angular/core';
import { GameService } from '../../../core/services/game-service/game-service';
import { NoteNumberToLetterPipe } from '../../../shared/pipes/note-number-to-letter/note-number-to-letter-pipe';

@Component({
  selector: 'note-prompt',
  imports: [NoteNumberToLetterPipe],
  templateUrl: './note-prompt.html',
  styleUrl: './note-prompt.css',
})

export class NotePrompt {
  gameService = inject(GameService);
  strings = [
    {number: 6, height: 70},
    {number: 5, height: 60},
    {number: 4, height: 55},
    {number: 3, height: 45},
    {number: 2, height: 40},
    {number: 1, height: 30}
  ]

  constructor() {
  }

  isActive(stringNumber:number, isLeftHalf:boolean) {
    let matchingString = stringNumber === this.gameService.targetString();
    let matchingHalf = isLeftHalf === this.gameService.targetFret() < 12;
    return matchingString && matchingHalf;
  }
}