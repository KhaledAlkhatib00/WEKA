import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreatePostsComponent } from '../create-posts/create-posts.component';

@Component({
  selector: 'app-user-sid-bar',
  templateUrl: './user-sid-bar.component.html',
  styleUrls: ['./user-sid-bar.component.css']
})
export class UserSidBarComponent implements OnInit {

 
  constructor(public home:HomeService,private dialog :MatDialog) { }

  ngOnInit(): void {
    this.home.GetResentPosts()

  }

  openDialog(){
    const dialogRef=this.dialog.open(CreatePostsComponent)
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
  
  
  
}

