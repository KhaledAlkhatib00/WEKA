import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  display_Image:any;
  users :any =[{}];
  
  
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }

  createUser(body:any){//form group --> create form 
    this.spinner.show();
    debugger
    body.userImage=this.display_Image
    this.http.post('https://localhost:44308/api/user/CreateUser',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Created');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }


  uploadAttachment(file:FormData)
  {
    debugger;
    this.http.post('https://localhost:44308/api/user/uploadImage',file).subscribe
    ((resp:any)=>{
      if(resp)
      {     
        this.display_Image=resp.userImage;//
        console.log(resp);
        debugger
      }
    },err=>{
      console.log(err);
      
    })
  }



  getAll(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
    debugger;
    this.spinner.show();
    this.http.get('https://localhost:44308/api/user/GetAllUser').subscribe((res)=>{
    this.users=res;
    // this.user.users=res;
    // this.users.userImage.replace('C','');
    this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message);
      this.toaster.error(err.status);
    })

  }

  UpdateUser (body:any)
{
  this.spinner.show();
  debugger;
  if(this.display_Image!=null)
  {
    body.userImage=this.display_Image;
  }
  
  
  this.http.put('https://localhost:44308/api/user/UpdateUser',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated |Successfully');
    this.display_Image=null;
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
 // window.location.reload();
}
DeleteUser(id:number,emailInfo:any)
{
  debugger
  this.spinner.show();
  this.http.delete('https://localhost:44308/api/user/DeleteUser/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
    },err=>{this.toaster.error(err.message)})
    this.toaster.success('Deleted |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

BlockUser(id:number,emailInfo:any)
{
  debugger
  this.spinner.show();
  this.http.get('https://localhost:44308/api/user/BlockUser/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
    },err=>{this.toaster.error(err.message)})
    this.toaster.success('Blocked |Successfully');
   
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

UnBlockUser(id:number,emailInfo:any)
{
  debugger
  this.spinner.show();
  this.http.get('https://localhost:44308/api/user/UnBlockUser/'+id).subscribe((resp)=>{
    this.spinner.hide();
    this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
    },err=>{this.toaster.error(err.message)})
   

    this.toaster.success('UnBlocked |Successfully');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
  //window.location.reload();
}

UpdatePassword(body:any)
{
  debugger
  this.spinner.show();
  this.http.post('https://localhost:44308/api/user/UpdatePassword',body).subscribe((resp)=>{
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message);
  })
}

}
