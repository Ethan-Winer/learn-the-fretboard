import { Component, inject } from '@angular/core';
import { GameService } from '../../../core/services/game-service/game-service';
import { NoteNumberToLetterPipe } from '../../../shared/pipes/note-number-to-letter/note-number-to-letter-pipe';
import { StringNumberToLetterPipe } from '../../../shared/pipes/string-number-to-letter/string-number-to-letter-pipe';

@Component({
  selector: 'game-container',
  imports: [NoteNumberToLetterPipe, StringNumberToLetterPipe],
  templateUrl: './game-container.html',
  styleUrl: './game-container.css',
})
export class GameContainer {
  public gameService = inject(GameService)
  public isRunning = false;

  onButtonClick() {
    if (this.isRunning) {
      this.gameService.stopGame();
    }
    else {    
      this.gameService.startGame();
    }
    this.isRunning = !this.isRunning
  }
}
