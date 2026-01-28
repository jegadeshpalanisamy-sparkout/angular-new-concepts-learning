import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalForm } from './signal-form/signal-form';

@Component({
  selector: 'app-root',
  imports: [
    SignalForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-new-concepts-learnings');
}
