import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {MatSnackBar} from'@angular/material/snack-bar';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  loginForm:any;
  registerForm:any;
  activeForm:'login' | 'register'='login';
  constructor( private fb: FormBuilder,private snackBar:MatSnackBar,private router:Router){}
  ngOnInit(){
    this.loginForm=this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    
  
    });

    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      mobile:[''],
   })
  }
  toggleForm(form:'login'|'register'){
    this.activeForm=form;
  }
  register(){
    if(this.registerForm.valid){
      console.log("Register Info:",this.registerForm.value);
      this.snackBar.open('Submitted Successfully','',{duration:3000});
      this.toggleForm('login');
    }else{
      this.snackBar.open('Please fill the details carefully','',{duration:3000});
    }
  }
  login(){
    if(this.loginForm.valid){
      console.log("Login Info:",this.loginForm.value);
      this.router.navigate(['./pages/main']);
    }else{
      this.snackBar.open('Invalid Email or Password','',{duration:3000});
    }
  }
}