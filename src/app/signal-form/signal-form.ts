import { Component, signal } from '@angular/core';
import { LoginData } from '../interfaces/form-interfaces/form.interfece';
import { email, form, FormField, maxLength, minLength, required, schema } from '@angular/forms/signals';

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
  loginForm = form(this.loginModal,(schemaPath) => {
    required(schemaPath.email,{message: 'Email is required'});
    email(schemaPath.email,{message: 'Email is invalid'});
    required(schemaPath.password,{message: 'Password is required'});    
    minLength(schemaPath.password,8,{message: 'Password must be at least 8 characters'});
    maxLength(schemaPath.password,20,{message: 'Password must be at most 20 characters'});
  });

//step 3: create a method to handle form submission
  onSubmit() {
    console.log('Form Submitted:', this.loginModal());
  }

}
