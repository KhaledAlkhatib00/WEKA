import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  display_Image:any;
  categories:any =[{}];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }


  CreateCategory(body:any){//form group --> create form 
    this.spinner.show();
    debugger
    body.categoryImage=this.display_Image;
    this.http.post('https://localhost:44308/api/category',body).subscribe((resp)=>{
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
    debugger;
    this.spinner.show();
    this.http.get('https://localhost:44308/api/category').subscribe((res)=>{
    this.categories=res;
    
    
    this.spinner.hide();
    this.toaster.success('Success');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })

  }

  UpdateCategory(body:any)
{
  this.spinner.show();
 
  debugger
  this.http.put('https://localhost:44308/api/category',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
 // window.location.reload();
}


DeleteCategory(id:number)
{
  debugger
  this.spinner.show();
  this.http.delete('https://localhost:44308/api/category/delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Deleted |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

uploadAttachment(file:FormData)
{
  debugger;
  this.http.post('https://localhost:44308/api/category/uploadImage',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.categoryImage;//
      console.log(resp);
      debugger
    }
  },err=>{
    console.log(err);
    
  })
}


}
