import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringAndFretPrompt } from './features/string-and-fret-prompt/string-and-fret-prompt';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StringAndFretPrompt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
