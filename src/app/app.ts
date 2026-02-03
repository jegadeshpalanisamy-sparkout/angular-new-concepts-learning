import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalForm } from './signal-form/signal-form';
import { AngularAriaConcept } from "./angular-aria-concept/angular-aria-concept";

@Component({
  selector: 'app-root',
  imports: [
    SignalForm,
    AngularAriaConcept
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-new-concepts-learnings');
}
