import { Component } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-reactive-form';
  loginForm:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
     email : new FormControl ('', [Validators.required,Validators.minLength(4),Validators.email]),
     age: new FormControl ('', [Validators.required, Validators.min(18), Validators.max(65)]), 
     password: new FormControl('', [Validators.required,Validators.minLength(4)]),
          
      });
     
  }

    
//form control
get f(){
  return this.loginForm.controls; 
}

  //loginUser() is a function, when form is submitted
  loginUser(){
    console.log(this.loginForm.value);

  }
}
