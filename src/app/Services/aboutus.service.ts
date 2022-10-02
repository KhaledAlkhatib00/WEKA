import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private http:HttpClient) { }

  aboutInfo:any=[{}]
  getAboutInfo()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/AboutUs/GetAllAboutUs').subscribe((res)=>
    {
      this.spinner.hide()
      this.aboutInfo=res
    },err=>{this.spinner.hide();this.toastr.error(err.message)})
  }


  
  about:any=[{}];

  GetAbout(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
   
    this.spinner.show();
    this.http.get('https://localhost:44308/api/aboutUs/GetAllAboutUs').subscribe((res)=>{
    this.about=res;
    
    debugger;
    this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message);
      this.toastr.error(err.status);
    })

  }

  UpdateAbout (body:any)
{
  this.spinner.show();
 
  if(this.display_Image!=null)
  {
    body.image=this.display_Image;
  }
  debugger
  this.http.put('https://localhost:44308/api/aboutUs/UpdateAboutUs',body).subscribe((resp)=>{
    this.spinner.hide();
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message);
  })
 // window.location.reload();
}

display_Image:any;
uploadAttachment(file:FormData)
{
  debugger;
  this.http.post('https://localhost:44308/api/aboutUs/uploadImage',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.image;//
      console.log(resp);
      debugger
    }
  },err=>{
    console.log(err);
    
  })
}

}
