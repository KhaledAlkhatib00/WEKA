import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.GetResentPosts()
    this.home.GetAllCategory()

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

  articleTitel:any=''
  inputValue(ev:any)
  {
    this.articleTitel=ev.target.value;
    console.log(ev.target.value);
    
  }
  search()
  {
  const Titelobj=
  {
    articleTitel:this.articleTitel.toString().toLowerCase()
  };
  debugger;
  this.home.searchPosts(Titelobj)
  }
  
}
