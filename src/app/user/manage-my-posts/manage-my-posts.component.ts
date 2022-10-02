import { Component, createComponent, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreatePostsComponent } from '../create-posts/create-posts.component';

@Component({
  selector: 'app-mange-my-posts',
  templateUrl: './manage-my-posts.component.html',
  styleUrls: ['./manage-my-posts.component.css']
})
export class ManageMyPostsComponent implements OnInit {
@ViewChild('callUpdateDailog')callUpdateDailog2!:TemplateRef<any>
@ViewChild('callDeleteDailog')callDeleteDailog2!:TemplateRef<any>
@ViewChild('callCommentDailog')callCommentDailog2!:TemplateRef<any>
@ViewChild('callViewLikeDailog')callViewLikeDailog2!:TemplateRef<any>


constructor(public home:HomeService,private dialog :MatDialog) { }

  updateForm:FormGroup=new FormGroup({
    id:new FormControl(),
    articleTitel:new FormControl(),
    articleGrapgh:new FormControl(),
    publishDate:new FormControl(),
    categoryId:new FormControl(),
    articleImage:new FormControl(),
    userId:new FormControl()
  })


  ngOnInit(): void {
    debugger

    this.home.GetUserArticle(this.home.userId);
    this.home.getUserActivityLike(this.home.userId);
    this.home.GetAllBadWord()
    this.home.pushBadWordinArray()   
    this.home.GetUserEmail(this.home.userId);
   }
  openDialog(){
    const dialogRef=this.dialog.open(CreatePostsComponent)
  }





  prv_data:any={};
  openUpdateDailog(id1:any,articleTitel1:any,articleGrapgh1:any
    ,publishDate1:any,categoryId1:any,articleImage1:any,userId1:any)
    {
      this.prv_data={
        id:id1,
        articleTitel:articleTitel1,
        articleGrapgh:articleGrapgh1,
        publishDate:publishDate1,
        categoryId:categoryId1,
        articleImage:articleImage1,
        userId:userId1
      }
      debugger
      console.log(this.prv_data);
      this.updateForm.controls['id'].setValue(this.prv_data.id)
      this.updateForm.controls['userId'].setValue(this.prv_data.userId)
      this.dialog.open(this.callUpdateDailog2);
    }
    SaveupdatePost(){
      debugger
      this.home.updatePost(this.updateForm.value);
    }
    
    uplodeFile(file:any)
    {
      if(file.length === 0)
      return ; 
      let fileToUpload=<File>file[0];//
      const formDate=new FormData();//object 
      formDate.append('file',fileToUpload,fileToUpload.name);
      debugger
      this.home.uploadAttachment(formDate);
    }


    openDeleteDailog(id:number)
    {
      const dialogRef=this.dialog.open(this.callDeleteDailog2);
      dialogRef.afterClosed().subscribe((res)=>{
        if(res!=undefined)
        {
          if(res=='yes'){
          this.home.deletePost(id)
          }
        
          else if(res=='no')
          {console.log('Thank You');}
          
        }
      })
    }


    articleTitel:any='';
    inputValue(ev:any)
    {
      debugger
      this.articleTitel=ev.target.value
      console.log(ev.target.value);
      
    }
  
 


    callCommentDailogg()
    {
      this.dialog.open(this.callCommentDailog2);
    }

    callViewLikeDailogg()
    {
      debugger
      this.dialog.open(this.callViewLikeDailog2);
    }
}
