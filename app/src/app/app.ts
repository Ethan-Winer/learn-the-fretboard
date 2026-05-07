import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotePrompt } from './features/components/note-prompt/note-prompt';
import { Navbar } from './features/components/navbar/navbar';
import { Fretboard } from './features/components/fretboard/fretboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotePrompt, Navbar, Fretboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('app');

}
