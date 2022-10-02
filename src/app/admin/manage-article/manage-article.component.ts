import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';


@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.css']
})
export class ManageArticleComponent implements OnInit {

  constructor(public home:HomeService, private dialog:MatDialog) { }

 active:boolean=true;
  graph:string='';

 @ViewChild('callViewDailog') callViewDailog! :TemplateRef<any>;
 @ViewChild('callDeleteDailog') callDeleteDailog! :TemplateRef<any>;
 @ViewChild('callBlockDailog') callBlockDailog! :TemplateRef<any>;
 @ViewChild('callUnBlockDailog') callUnBlockDailog! :TemplateRef<any>;
  
  ngOnInit(): void {
    this.home.GetArticles();
    // this.home.GetAllReport();
    debugger;
    
  
  }

  emailForm:FormGroup=new FormGroup({
    to:new FormControl(),
    subject :new FormControl(),
    body:new FormControl(),

  })

  ViewArticle(article:any){
    this.graph=article.articleGrapgh;
    debugger;
    const dialogVal= this.dialog.open(this.callViewDailog);
    
  }

  BlockArticle(id:number,userId:number,title:string){
    debugger;
    this.emailForm.controls['subject'].setValue("Your article has been Blocked");
    this.emailForm.controls['body'].setValue("Your article "+title+" has been Blocked from our website if you need any help please contact the admin");
    this.home.GetUserEmail(userId);
    const dialogVal= this.dialog.open(this.callBlockDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.home.BlockArticle(id,this.emailForm.value);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }
  DeleteArticle(id:number){
    debugger;
   
    
    const dialogVal= this.dialog.open(this.callDeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.home.deletePost(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }
  UnBlockArticle(id:number,userId:number,title:string){
    debugger;
    
    this.emailForm.controls['subject'].setValue("Your article has been UnBlocked");
    this.emailForm.controls['body'].setValue("Your article "+title+" has been UnBlocked from our website if you need any help please contact the admin");
    this.home.GetUserEmail(userId);
    const dialogVal= this.dialog.open(this.callUnBlockDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.home.UnBlockArticle(id,this.emailForm.value);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }
  Switch()
  {
    this.active=!this.active;
  }
  
}
