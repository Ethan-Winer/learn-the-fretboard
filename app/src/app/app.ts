import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotePrompt } from './features/components/note-prompt/note-prompt';
// import { GameContainer } from './features/components/game-container/game-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotePrompt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('app');

}
