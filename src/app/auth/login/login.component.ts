import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  constructor(private auth:AuthService) { }

  
  ngOnInit(): void {
    
  //  this.loginForm.setValue({userName:localStorage.getItem('userName') ,password:localStorage.getItem('password')}) 
   debugger;
  }

  Submit()
  {
    debugger;
    this.auth.submit(this.loginForm.value);
  }

}
