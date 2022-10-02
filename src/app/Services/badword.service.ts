import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BadwordService {

  words:any =[{}];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }


  CreateWord(body:any){//form group --> create form 
    this.spinner.show();
    debugger
    
    this.http.post('https://localhost:44308/api/badword',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Created');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }


  



  GetAll(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
   
    this.spinner.show();
    this.http.get('https://localhost:44308/api/badword').subscribe((res)=>{
    this.words=res;
    
    debugger;
    this.spinner.hide();
    this.toaster.success('Success');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })

  }

  UpdateWord (body:any)
{
  this.spinner.show();
 
  debugger
  this.http.put('https://localhost:44308/api/badword',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
 // window.location.reload();
}


DeleteWord(id:number)
{
  debugger
  this.spinner.show();
  this.http.delete('https://localhost:44308/api/badword/delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Deleted |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}
}
