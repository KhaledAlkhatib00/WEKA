import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, TitleStrategy } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {
 
  @ViewChild('callAddCommentDailog')callAddCommentDailog2!:TemplateRef<any>


  constructor(public home:HomeService,private dialog :MatDialog,private router:Router) { }
  

  
  ngOnInit(): void {
    this.home.getUserActivityLike(this.home.userId);
    debugger
    this.home.GetAllBadWord()
    this.home.pushBadWordinArray()   
    this.home.GetUserEmail(this.home.userId);
    this.home.FavoritePosts(this.home.userId);

  }
  
  ids:any=[]
  GetIdFromPost(id:any)
  {
    this.ids.push(id)
    console.log(this.ids);
    // this.home.GetArticleAouther(id)
  }

  addFavoriteForm:FormGroup=new FormGroup(
    {
      userId:new FormControl(),
      articleId:new FormControl()
    })

    DeleteFavorate(aId:any,uId:any)
  {
    debugger
    this.home.deleteFavorate(aId,uId)
    
  }

  addLikeForm:FormGroup=new FormGroup({
    userId:new FormControl(),
    articleId:new FormControl()
  });
 
  addLike(uId:any,aId:any)
  {
    
    this.addLikeForm.controls['userId'].setValue(uId);
    this.addLikeForm.controls['articleId'].setValue(aId);
    this.home.createLike(this.addLikeForm.value)
    this.home.GetNumnerOfLikeForEachAeticle(aId);

  }
  

  createCommentForm:FormGroup=new FormGroup({
    commentText:new FormControl(),
    commentDate:new FormControl(),
    articleId:new FormControl(),
    userId:new FormControl()
  })
  
  today = new Date()
  callAddCommentDailogg(aId:any,uId:any)
  {
    this.home.GetNumnerOfCommentForEachAeticle(aId)

    this.createCommentForm.controls['articleId'].setValue(aId)
    this.createCommentForm.controls['userId'].setValue(uId)
    this.createCommentForm.controls['commentDate'].setValue(this.today)
    
    this.dialog.open(this.callAddCommentDailog2);

  }

  createComment()
  {
    this.home.createComment(this.createCommentForm.value)
  }


  ViewAllPosts()
  {  
     this.home.GetAllPosts();
  }


  CreateUserActivityForm:FormGroup=new FormGroup({
    ActivityText:new FormControl(),
    atctivityId:new FormControl(),
    UserId:new FormControl(),
    ArticleId:new FormControl(),
  
  })
  
  CreateUserActivityLike(articleId:any,activText:any)
  {
    this.CreateUserActivityForm.controls['ActivityText'].setValue("You add like to "+activText)
    this.CreateUserActivityForm.controls['atctivityId'].setValue(1)
    this.CreateUserActivityForm.controls['UserId'].setValue(this.home.userId)
    this.CreateUserActivityForm.controls['ArticleId'].setValue(articleId)
    this.home.createUserActivity(this.CreateUserActivityForm.value)
  }

  articleId:number=0
  articleTitelToComment:string|undefined
  GetArticleIdandTitel(id:any,titel:any)
  {
    this.articleId=id;
    this.articleTitelToComment=titel
  }
  CreateUserActivityComment()
  {
    this.CreateUserActivityForm.controls['ActivityText'].setValue("You add comment to "+this.articleTitelToComment)
    this.CreateUserActivityForm.controls['atctivityId'].setValue(2)
    this.CreateUserActivityForm.controls['UserId'].setValue(this.home.userId)
    this.CreateUserActivityForm.controls['ArticleId'].setValue(this.articleId)
    this.home.createUserActivity(this.CreateUserActivityForm.value)
  }

}
