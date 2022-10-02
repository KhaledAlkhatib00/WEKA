import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }

  testimonials:any=[{}];


  GetAllTestimonial(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
    
    this.spinner.show();
    this.http.get('https://localhost:44308/api/testamonial').subscribe((res)=>{
    this.testimonials=res;
    debugger;
    
    this.spinner.hide();
    this.toaster.success('Success');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })

  }



DeleteTestimonial(id:number)
{
  debugger;
  this.spinner.show();
  this.http.delete('https://localhost:44308/api/testamonial/delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Deleted |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

ShowTestimonial(id:number)
{
  debugger
  this.spinner.show();
  this.http.get('https://localhost:44308/api/testamonial/ShowTestimonial/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Shown |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
}

HideTestimonial(id:number)
{
  debugger
  this.spinner.show();
  this.http.get('https://localhost:44308/api/testamonial/HideTestimonial/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Hide |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
}



CreateTestemonial(body:any)
{
  debugger
  this.spinner.show();
  this.http.post('https://localhost:44308/api/testamonial',body).subscribe((resp)=>{
    this.spinner.hide();
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
}
}
