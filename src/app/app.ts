import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FretboardGraph } from './features/components/fretboard-graph/fretboard-graph';
import { NotePrompt } from './features/components/note-prompt/note-prompt';
import { Navbar } from './features/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FretboardGraph, NotePrompt, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('app');

}
