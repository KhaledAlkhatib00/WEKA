
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutusService } from 'src/app/Services/aboutus.service';
import { ContactService } from 'src/app/Services/contact.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.css']
})
export class ManagePagesComponent implements OnInit {

  constructor(public home:HomeService,public contact:ContactService,public about:AboutusService ,private dialog:MatDialog) { }

  @ViewChild('callUpdateHomeDailog') callUpdateHomeDailog! :TemplateRef<any>;
  @ViewChild('callUpdateAboutDailog') callUpdateAboutDailog! :TemplateRef<any>;
  @ViewChild('callUpdateContactDailog') callUpdateContactDailog! :TemplateRef<any>;
  ngOnInit(): void {
    this.home.GetHome();
    this.contact.GetContact();
    this.about.GetAbout();
  }


  homeForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    text1:new FormControl(''),
    text2:new FormControl(''),
    text3:new FormControl(''),
    text4:new FormControl(''),
    image1:new FormControl(''),
 
  })



  contactForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    subject:new FormControl(''),
    messageText:new FormControl('')
  })



  aboutForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    aboutText:new FormControl(''),
    image:new FormControl(''),
    locationPath:new FormControl(''),
    title:new FormControl('')
  })
  p_Home:any={};
  p_contact:any={};
  p_about:any={};
  updateHomeDailog(obj:any){
    this.p_Home=
    {
      text1:obj.text1,
      text2:obj.text2,
      text3:obj.text3,
      text4:obj.text4,
      image1:obj.image1
    };
    this.homeForm.controls['id'].setValue(obj.id); 
    this.dialog.open(this.callUpdateHomeDailog)

  }
  updateContactDailog(obj:any){
    this.p_contact={
      subject:obj.subject,
      messageText:obj.messageText
    };
    this.contactForm.controls['id'].setValue(obj.id); 
    this.dialog.open(this.callUpdateContactDailog)
  }
  updateAboutDailog(obj:any){
    this.p_about={
      aboutText:obj.aboutText,
      title:obj.title,
      locationPath:obj.locationPath,
      image:obj.image
    };
    this.aboutForm.controls['id'].setValue(obj.id); 
    this.dialog.open(this.callUpdateAboutDailog)
  }

  UpdateHome(){
    if (this.home.display_Image==null)
    {
      this.homeForm.controls['image1'].setValue(this.p_Home.image1);
    }
   this.home.UpdateHome(this.homeForm.value);
  }
  UpdateContact(){
 
    this.contact.UpdateContact(this.contactForm.value)
  }
  UpdateAbout(){
    if (this.about.display_Image==null)
    {
      this.aboutForm.controls['image'].setValue(this.p_about.image);
    }
    this.about.UpdateAbout(this.aboutForm.value)
  }


  uploadImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    debugger
    this.about.uploadAttachment(formDate);
  }
  
  uploadHomeImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    debugger
    this.home.uploadHomeAttachment(formDate);
  }
  

}
