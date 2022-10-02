import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerform:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',Validators.required),
    userImage:new FormControl(),
  
  
  })
    
  constructor(private user:UserService,private route:Router) { }

  ngOnInit(): void {
  }



  Submit()
  {
   this.user.createUser(this.registerform.value);
   this.route.navigate(['security/login'])
  }

  uploadImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    debugger
    this.user.uploadAttachment(formDate);
  }

  matchError(){
    if(this.registerform.controls['password'].value==this.registerform.controls['confirmpassword'].value)
    this.registerform.controls['confirmpassword'].setErrors(null)
    else 
    this.registerform.controls['confirmpassword'].setErrors({mismatch:true})
  }
}
