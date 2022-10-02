import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TitleStrategy } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

  @ViewChild('callAddCommentDailog')callAddCommentDailog2!:TemplateRef<any>
  @ViewChild('callAddReportDailog')callAddReportDailog2!:TemplateRef<any>


  constructor( public home:HomeService,private dialog :MatDialog) { }
  

  
  ngOnInit(): void {
    this.home.GetTopFiveArticle()
    this.home.GetResentPosts()
    this.home.GetAllCategory()
 
    console.log(this.home.filterdPosts);
    


  }
  
  ionViewDidEnter(id:any)
  {
    this.home.GetArticleAouther(id)
  }


  addFavoriteForm:FormGroup=new FormGroup(
    {
      userId:new FormControl(),
      articleId:new FormControl()
    })

  addToFavorite(uId:any,aId:any)
  {
    this.addFavoriteForm.controls['userId'].setValue(uId);
    this.addFavoriteForm.controls['articleId'].setValue(aId);
    this.home.createFavorite(this.addFavoriteForm.value)
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


  
  CreateUserActivityForm:FormGroup=new FormGroup({
    ActivityText:new FormControl(),
    atctivityId:new FormControl(),
    UserId:new FormControl(),
    ArticleId:new FormControl(),
  
  })
  
  CreateUserActivityLike(articleId:any,activText:any)
  {
    this.CreateUserActivityForm.controls['ActivityText'].setValue("You Add Like To"+activText)
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
    this.CreateUserActivityForm.controls['ActivityText'].setValue("You Add Comment To"+this.articleTitelToComment)
    this.CreateUserActivityForm.controls['atctivityId'].setValue(2)
    this.CreateUserActivityForm.controls['UserId'].setValue(this.home.userId)
    this.CreateUserActivityForm.controls['ArticleId'].setValue(this.articleId)
    this.home.createUserActivity(this.CreateUserActivityForm.value)
  }
  



  CreateReportForm:FormGroup=new FormGroup({
    reportMessage:new FormControl(),
    reportDate:new FormControl(),
    userId:new FormControl(),
    articleId:new FormControl()
  })

  callAddReportDailogg(aId:any,uId:any)
  {
    this.CreateReportForm.controls['reportDate'].setValue(this.today)
    this.CreateReportForm.controls['userId'].setValue(uId)
    this.CreateReportForm.controls['articleId'].setValue(aId)

    this.dialog.open(this.callAddReportDailog2);

  }

 

  createReports()
  {
    this.home.CreateReport(this.CreateReportForm.value)
  }

}