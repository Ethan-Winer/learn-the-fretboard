import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FretboardGraph } from './features/components/fretboard-graph/fretboard-graph';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FretboardGraph],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('app');

}
