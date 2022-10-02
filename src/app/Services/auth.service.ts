import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private spinner:NgxSpinnerService,private toster:ToastrService, private http:HttpClient, private router :Router) { }
  key1:string='userName';
  key2:string='password';
  value1:string|null='';
  value2:string|null='';
 
  SubmitLogin(form:any){
    this.value1 = form.userName;
    this.value2= form.password;
    this.spinner.show();
    this.toster.success("test");
    this.toster.error("test");
    setTimeout(()=>{
      console.log(form.userName);
      console.log(form.password);
      
      this.spinner.hide()
    },5000)
    debugger;
    this.StoreName(form.userName , form.password);
  }

  SubmitRegister(form:any)
  {
    this.spinner.show();
    setTimeout(()=>{
      console.log(form);
      
      
      this.spinner.hide()
    },5000);
    this.toster.success("Success");
    debugger;
  }

  StoreName(userName:any,password:any) {
    localStorage.setItem(this.key1, userName);
    localStorage.setItem(this.key2, password);
    this.value1 = localStorage.getItem(this.key1);
    this.value1 = localStorage.getItem(this.key2);
    console.log(userName);
    console.log(password);
}


submit(form:any){

  var body ={
    username :form.userName.toString(),
    password:form.password.toString()
  }

const headerDir={
'Contant-Type':'application/json',
'Accept':'application/json'
}
  const requestOptions={
    headers:new HttpHeaders(headerDir)
  }

  this.spinner.show();
  this.http.post('https://localhost:44308/api/JWT/Authen',body,requestOptions).subscribe
  ((resp)=>{
    this.spinner.hide();
    const responce ={
      token:resp.toString()
    }
    localStorage.setItem('token',responce.token);
    let data :any = jwt_decode(responce.token);//object 
    console.log(data);
    localStorage.setItem('user',JSON.stringify({...data}) );
    if(data.sid!=2)
    {
        if(data.role=='Admin')
        {
          this.toster.info("Welcome "+data.unique_name)
          this.router.navigate(['admin/home']);
        }
        else if (data.role=='Claint')
        {
          this.router.navigate(['']);
          this.toster.info("Welcome back"+" "+data.unique_name)
        }}
    else
    {
    this.toster.error("This account is blocked");
    localStorage.clear();
    }
  },err=>{
    this.spinner.hide();
    this.toster.error("username or password is wrong");
    
  })


}

SignOut(){
  localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cHNpZCI6IjEwMiIsInVuaXF1ZV9uYW1lIjoidGVzdCIsInJvbGUiOiJDbGFpbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwibmJmIjoxNjYyNTc0NDg5LCJleHAiOjE2NjI1NzgwODksImlhdCI6MTY2MjU3NDQ4OX0.KmxJau09qvplraSnyRbZJSQK1Ya_92NGp67_c5XQeVI");
  localStorage.setItem('user',JSON.stringify({"groupsid":"102","unique_name":"test","role":"Claint","http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid":"1","nbf":1662574489,"exp":1662578089,"iat":1662574489}));
  this.router.navigate(['../../security/login']);
          this.toster.success("Signed Out successfuly");
          
}


}