import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfileComponent } from '../admin/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:any=[{}];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService ) { }


GetProfile(id:number)
{
  debugger;
  this.spinner.show()
  this.http.get('https://localhost:44308/api/User/GetUserById/'+id).subscribe((res)=>{
    this.user=res;
  
    // this.profile.p_data=this.user[0];
    debugger;
    this.spinner.hide()
  },err=>{
    this.spinner.hide()
    this.toaster.error(err.message)
  })
}


}
