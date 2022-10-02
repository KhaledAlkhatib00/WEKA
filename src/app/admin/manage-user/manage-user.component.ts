import { Component, OnInit, TemplateRef, ViewChild,OnDestroy  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  updateForm:FormGroup=new FormGroup({
    userId:new FormControl(),
    email : new FormControl('', [Validators.required, Validators.email]),
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',Validators.required),
    userImage:new FormControl()
  
  });

  emailForm:FormGroup=new FormGroup({
    to:new FormControl(),
    subject :new FormControl(),
    body:new FormControl(),
  
  });

  @ViewChild('callupdateDailog') callupdateDailog! :TemplateRef<any>;
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
  @ViewChild('callBlockDailog') callBlockDailog! :TemplateRef<any>;
  @ViewChild('callUnBlockDailog') callUnBlockDailog! :TemplateRef<any>;
  constructor(public user:UserService, private dialog:MatDialog,private home:HomeService) { }
 
  dtOptions: any = {};
  test:any=[{
    name:'saif'
  },
  {
name:'aws'}];
users:any =[{}];
  ngOnInit(): void {

    this.user.getAll();
    debugger;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print','pdf'
        ]
    };
    

  }
Test()
{
  debugger
  this.user.users.forEach((element:any) => {
    this.users.push(element.fName)
  });
  this.users=this.user.users;
}

  DeleteUser(id:number,email:string)
  {
    debugger;
    this.emailForm.controls['to'].setValue(email);
    this.emailForm.controls['subject'].setValue("Your account has been deleted");
    this.emailForm.controls['body'].setValue("Your account has been Deleted from our website if you need any help please contact the admin");
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.user.DeleteUser(id,this.emailForm.value);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }


  p_data:any={};
  updateDailog(obj:any){
    debugger;
    this.p_data={
      userId:obj.id,
      // userName:obj.userName,
      email:obj.email,
      fName:obj.fName,
      lName:obj.lName,
      phoneNumber:obj.phoneNumber,
      userImage:obj.userImage
      // password:obj.password
    }
    console.log(this.p_data);
    this.updateForm.controls['userId'].setValue(this.p_data.userId); 
    
    
    this.dialog.open(this.callupdateDailog)
    
  }
  updateUser(){
    debugger
    if (this.user.display_Image==null)
    {
      this.updateForm.controls['userImage'].setValue(this.p_data.userImage);
    }
    
    this.user.UpdateUser(this.updateForm.value);
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

  BlockUser(id:number,email:string)
  {
    debugger;
    const dialogVal= this.dialog.open(this.callBlockDailog);
    this.emailForm.controls['to'].setValue(email);
  this.emailForm.controls['subject'].setValue("you has been blocked");
  this.emailForm.controls['body'].setValue("you has been Blocked from entering our website if you need any help please contact the admin");
 
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          
          this.user.BlockUser(id,this.emailForm.value);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }

  UnBlockUser(id:number,email:string)
  {
    debugger;
    this.emailForm.controls['to'].setValue(email);
    this.emailForm.controls['subject'].setValue("you has been Unblocked");
    this.emailForm.controls['body'].setValue("you has been UnBlocked from entering our website if you need any help please contact the admin");
    const dialogVal= this.dialog.open(this.callUnBlockDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.user.UnBlockUser(id,this.emailForm.value);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }


  
email()
{
  debugger
  
 
}



 
  
   
}
