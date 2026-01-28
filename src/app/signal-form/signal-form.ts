import { Component, signal } from '@angular/core';
import { LoginData } from '../interfaces/form-interfaces/form.interfece';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
//step 1: create a signal to hold the form data
  loginModal = signal<LoginData> ({
    email: '',
    password: ''
  });

//step 2: create a form signal using the form function and pass the loginModal signal to it
  loginForm = form(this.loginModal);

//step 3: create a method to handle form submission
  onSubmit() {
    console.log('Form Submitted:', this.loginModal());
  }

}
