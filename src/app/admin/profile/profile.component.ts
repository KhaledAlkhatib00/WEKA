import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user2 : any =localStorage.getItem('user');
   user1:any=JSON.parse(this.user2);
   userId:any=parseInt(this.user1.groupsid);




  updateForm:FormGroup=new FormGroup({
    userId:new FormControl(),
    email : new FormControl('', [Validators.required, Validators.email]),
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',Validators.required),
    userImage:new FormControl()
  
  });
 

  passwordForm:FormGroup=new FormGroup({
    userId:new FormControl(),
    oldPassword : new FormControl('', [Validators.required]),
    newPassword :new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmPassword :new FormControl('',[Validators.required])
  });
  
  constructor(public profile:ProfileService,public user:UserService) { }

  ngOnInit(): void {

    this.profile.GetProfile(this.userId);
    debugger
    
    
    
  }

  UpdateUser()
  { 
    debugger;
    if (this.user.display_Image==null)
    {
      this.updateForm.controls['userImage'].setValue(this.profile.user[0].userImage);
    }
    this.updateForm.controls['userId'].setValue(this.profile.user[0].id)

     this.user.UpdateUser(this.updateForm.value);
  }
 UpdatePassword()
 {
  this.passwordForm.controls['userId'].setValue(this.userId)
  this.user.UpdatePassword(this.passwordForm.value);
 }

 UploadImage(file:any)
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
  if(this.passwordForm.controls['newPassword'].value==this.passwordForm.controls['confirmPassword'].value)
  this.passwordForm.controls['confirmPassword'].setErrors(null)
  else 
  this.passwordForm.controls['confirmPassword'].setErrors({mismatch:true})
}

}
