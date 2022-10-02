import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-manage-caregory',
  templateUrl: './manage-caregory.component.html',
  styleUrls: ['./manage-caregory.component.css']
})
export class ManageCaregoryComponent implements OnInit {

  @ViewChild('callupdateDailog') callupdateDailog! :TemplateRef<any>;
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>;
  constructor(public category:CategoryService, private dialog:MatDialog) { }

  // badword:FormGroup=new FormGroup({
  //   id:new FormControl(''),
  //   badwords:new FormControl('')
  // })
  
  CreateForm:FormGroup=new FormGroup({
    
    categoryName:new FormControl(''),
    categoryImage:new FormControl('')
  })
  updateForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    categoryName:new FormControl(''),
    categoryImage:new FormControl('')
  })
  ngOnInit(): void {
    this.category.GetAll();
  }


  DeleteCategory(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.category.DeleteCategory(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }


  p_data:any={};
  updateDailog(obj:any){
    debugger;
    this.p_data={
     id:obj.id,
     categoryName:obj.categoryName,
     categoryImage:obj.categoryImage
      
    }
    console.log(this.p_data);
    this.updateForm.controls['id'].setValue(this.p_data.id); 
    
    
    this.dialog.open(this.callupdateDailog)
    
  }
  CreateDialog(){
    this.dialog.open(this.callCreateDailog);
  }
  UpdateCategory(){
    debugger
    if (this.category.display_Image==null)
    {
      this.updateForm.controls['userImage'].setValue(this.p_data.userImage);
    }
    this.category.UpdateCategory(this.updateForm.value);
  }

  CreateCategory(){
    debugger
    
    this.category.CreateCategory(this.CreateForm.value);

  }

  uploadImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    debugger
    this.category.uploadAttachment(formDate);
  }
  


}
