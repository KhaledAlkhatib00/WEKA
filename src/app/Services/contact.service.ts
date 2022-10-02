import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedModule } from '../shared/shared.module';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  messages:any=[{}];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }


  GetAllMessages(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
   
    this.spinner.show();
    this.http.get('https://localhost:44308/api/message/GetAllMessage').subscribe((res)=>{
    this.messages=res;
    
    debugger;
    this.spinner.hide();
    this.toaster.success('Success');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })

  }

 


DeleteMessage(id:number)
{
  debugger
  this.spinner.show();
  this.http.delete('https://localhost:44308/api/message/DeleteMessage/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Deleted |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

CreateMessage(body:any)
{
  debugger
  this.spinner.show();
  this.http.post('https://localhost:44308/api/message/CreateMessage',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Message Sent Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
}

  contactUsInfo:any=[{}]
  contactInfo(){
    this.http.get('https://localhost:44308/api/ContactUs').subscribe((res)=>{
      this.contactUsInfo=res;
    },err=>{this.toaster.error(err.message)})
  }




  contact:any=[{}];
  GetContact(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
   
    this.spinner.show();
    this.http.get('https://localhost:44308/api/contactUs').subscribe((res)=>{
    this.contact=res;
    
    debugger;
    this.spinner.hide();
    this.toaster.success('Success');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })
  
  }
  
  UpdateContact (body:any)
  {
  this.spinner.show();
  
  debugger
  this.http.put('https://localhost:44308/api/contactUs',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  // window.location.reload();
  }
  
  

}