import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 

  articles:any=[{}];
  user : any =localStorage.getItem('user');
  user1:any=JSON.parse(this.user);
  userId:any=parseInt(this.user1.groupsid);
  
  articleLikes:any=[{}]
  articleComments:any=[{}];
  filterdPosts:any=[{}]
  userPosts:any=[{}];
  post:any=[{}];
  display_image:any;
  category:any=[{}]
  message:string='This message from services'


  activePost:any=[{}];
  blockedPost:any =[{}];
  i:number=0;
  reports:any=[{}];
  
  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private http:HttpClient) { }


  allPosts:any=[{}]
  GetAllPosts()
  {
    debugger
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/GetAllPostsNewInfo').subscribe((res)=>{
      this.allPosts=res;

      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  GetTopFiveArticle()
  {
    debugger
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/GetTopFiveArticle').subscribe((res)=>{
       this.post=res;
      console.log(this.post);
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }



  articleAouther:any=[{}]
  GetArticleAouther(id:any)
  {
    
    this.http.post('https://localhost:44308/api/Article/GetArticleAouther/'+id,observable)
    .subscribe((res)=>{
      // this.articleAouther.push(res)
      this.articleAouther=res
      console.log(this.articleAouther);
      
    },err=>{
      this.toastr.error(err.message)
    })
  }

  recentPosts:any=[{}];
  GetResentPosts()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/GetRecentPosts').subscribe((res)=>{
      this.recentPosts=res;
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  GetAllCategory()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Category').subscribe((res)=>{
      this.category=res;
      console.log(this.category);
      
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }


  createPost(body:any){//form group --> create form 
    this.spinner.show();
    debugger
    body.articleImage=this.display_image
    this.http.post('https://localhost:44308/api/Article/CreateArticle',body).subscribe((resp)=>{
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
    })
  }


  userEmail:any=[{}]
  GetUserEmail(id:any)
  {  debugger
    this.http.post('https://localhost:44308/api/user/GetUserEmail/'+id,observable).subscribe((res)=>
    {
      this.userEmail=res
      console.log(this.userEmail);
      
    },err=>{this.toastr.error(err.message())})
  }


  badWrodObj:any=[{}]
  badword:any=[]

  GetAllBadWord()
  {
    debugger
    this.http.get('https://localhost:44308/api/badword').subscribe((res)=>{
    this.badWrodObj=res   
    console.log(this.badWrodObj);
    
    },err=>{
      this.toastr.error(err.message)
    })
  }

 pushBadWordinArray()
 {
  debugger
  for (let index = 0; index < this.badWrodObj.length; index++) {
    this.badword.push(this.badWrodObj[index]['word']);
    
  }
  console.log(this.badword);
  
 }

  status:number=2
  checkArticleStatus(body:any,emailInfo:any)
  {
    debugger
    const graphwords:any=body['articleGrapgh'].split(" ")
    for (let index = 0; index < this.badword.length; index++) {
        if (graphwords.includes(this.badword[index])){
          this.status=1
        }
    }

  if (this.status==1) {
    this.spinner.show()
    body.articleImage=this.display_image
    this.http.post('https://localhost:44308/api/Article/CreateBlockedArticle',body).subscribe((res)=>{
      this.spinner.hide()
    },err=>{this.spinner.hide();this.toastr.error(err.message)})

    this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
    },err=>{this.toastr.error(err.message)})
  }
  else if(this.status==2)
  {
    this.spinner.show()
    body.articleImage=this.display_image
    this.http.post('https://localhost:44308/api/Article/CreateArticle',body).subscribe((res)=>{
    this.spinner.hide()
    },err=>{this.spinner.hide();this.toastr.error(err.message)})
  }

}

  // cheeckBadWords(graph:any)
  // {  
  //   const graphwords:any=graph.split(" ")
    
  //   for (let index = 0; index < graphwords.length; index++) {
  //     for (let index1 = 0; index1 < this.badword.length; index1++) {
  //       if (this.badword[index1]===graphwords[index]) {
  //         alert("Your post have a badword ("+ this.badword[index1]+") this will cause the post to be blocked \n \t   Please change it ^_^")          
  //         }
  //     }
      
  //   }
  // }

  createUserVisa(body:any)
  {     
     
    this.spinner.show();
    this.http.post('https://localhost:44308/api/VisaInfo/CreateVisaInfo',body)
    .subscribe((res)=>{
      this.GetUserVisaInfo(this.userId)
      this.spinner.hide();
      this.toastr.info("Create Successfull")
      
    },err=>
    {
      this.spinner.hide();
      this.toastr.error(err.message);
    })
  }

  userVisa:any=[{}]
  GetUserVisaInfo(id:any)
  {
    this.spinner.show()
    this.http.post('https://localhost:44308/api/User/GetUserVisaInfo/'+id,observable)
    .subscribe((res)=>{
      this.spinner.hide()
      this.userVisa=res
    },err=>{this.spinner.hide();this.toastr.error(err.message)})
  }
  
  

  checkPayment(emailInfo:any,cardNum:number,mm:number,yy:number,cv:number,id:number=this.userId)
  {
    
    if(this.userVisa[0].visaNumber==cardNum && this.userVisa[0].mm==mm && this.userVisa[0].yy==yy && this.userVisa[0].cv==cv)
    {
      if (this.userVisa[0].blance>=10) {
        
        this.spinner.show()
        this.http.post('https://localhost:44308/api/VisaInfo/payment/'+id,observable).subscribe
        ((res)=>{
          this.spinner.hide();
          this.toastr.info('Payment Done Successflly');
          (document.getElementById('1') as HTMLInputElement).disabled = false;
        },err=>{this.spinner.hide();this.toastr.error(err.message)})

        
    this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
    },err=>{this.toastr.error(err.message)})
      
     
    }
      else{
        alert("You dont have enough money \n then you cant publish your article");
      }
      
    }
    else{
      alert('Invalid Visa information');
      (document.getElementById('1') as HTMLInputElement).disabled = true;

    }
  }

  

  uploadAttachment(file:FormData)
  {
    this.http.post('https://localhost:44308/api/Article/UploadImage',file).subscribe
    ((resp:any)=>{
      if(resp)
      {     
        this.display_image=resp.articleImage;//
        console.log(resp);
      }
    },err=>{
      console.log(err);
      
    })
  }
  updatePost(body:any)
  {
    body.articleImage=this.display_image;
    
    this.http.put('https://localhost:44308/api/Article/updateArticle',body)
    .subscribe((res)=>{
      this.toastr.success('Updated Successfully')
    },err=>{this.toastr.error(err.message)})
  }


  deletePost(id:number)
  {
    this.spinner.show()
    this.http.delete('https://localhost:44308/api/Article/deleteArticle/'+id)
    .subscribe((res)=>{
      this.spinner.hide();
      this.toastr.success('deleted Successfully')
      
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message)
    })

  }

  searchResutltHome:any=[{}];
  searchPosts(data:any)
  {
    this.http.post('https://localhost:44308/api/Article/searchArticle',data)
    .subscribe((res)=>
    {
      
      this.searchResutltHome=res
    },err=>{
      this.toastr.error(err.message)
    })
  }


  createLike(body:any){
    
    this.spinner.show()
    this.http.post('https://localhost:44308/api/LikeArticle/CreateLike',body)
    .subscribe((res:any)=>{
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }


  numberOfFavorite:any=[{}]
  GetNumnerOfFavorateForEachAeticle(id:any)
  {
    this.http.post('https://localhost:44308/api/Article/GetCountOfFavorite/'+id,observable).subscribe((res)=>{
      this.numberOfFavorite=res
    },err=>{this.toastr.error(err.message)})
  }
  createFavorite(body:any)
  {
    this.spinner.show()
    this.http.post('https://localhost:44308/api/Favorite/CreateFavorite',body).subscribe((res)=>
    {
      this.spinner.hide()
      
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message);
    })
  }

  deleteFavorate(aId:any,uId:any)
  {
    debugger
    this.http.delete('https://localhost:44308/api/Favorite/DeleteFavorite/'+aId+'/'+uId).subscribe((res)=>{
      this.toastr.info('Unavourite article')
    })
  }

  myFavoritePosts:any=[{}]
  FavoritePosts(id:any)
  {
    this.http.post('https://localhost:44308/api/user/GetMyFavoriteArticle/'+id,observable)
    .subscribe((res)=>{
      this.myFavoritePosts=res;
    },err=>{this.toastr.error(err.message)})
  }

  createComment(body:any)
  {
    
    this.spinner.show()
    this.http.post('https://localhost:44308/api/Commentt/CreateComments',body)
    .subscribe((res)=>
    {
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  getArticleComments(id:any)
  {
    this.http.post('https://localhost:44308/api/Article/GetArticleComments/'+id,observable) 
    .subscribe((res)=>
    {
      this.articleComments=res;
      console.log(this.articleComments)
    },err=>{
      this.toastr.error(err.message);
    })
  }

  GetUserArticle(id:any)
  {debugger
    this.spinner.show()
    this.http.post('https://localhost:44308/api/Article/GetUserArticle/'+id,observable)
    .subscribe((res)=>
    {
      this.userPosts=res
     
      this.spinner.hide()
    },err=>
    {
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

 

  filterByCategory(id:any)
  {

  this.spinner.show()
  this.http.post('https://localhost:44308/api/Article/FillterArticleByCategory/'+id,observable)
  .subscribe((res)=>{
    
    this.filterdPosts=res
    console.log(this.filterdPosts);
    
    this.spinner.hide()
  },err=>{
    this.spinner.hide()
    this.toastr.error(err.message)
  })
  }
  
  numberOfComments:any=[{}]
  GetNumnerOfCommentForEachAeticle(id:any)
  {
    debugger
    this.http.post('https://localhost:44308/api/Article/GetCountOfCommentt/'+id,observable).subscribe((res)=>{
      this.numberOfComments=res
      
    },err=>{this.toastr.error(err.message)})
  }
 

  numberOfLikes:any=[{}]
  GetNumnerOfLikeForEachAeticle(id:any)
  {debugger
    this.http.post('https://localhost:44308/api/Article/GetCountOfLike/'+id,observable).subscribe((res)=>{
      this.numberOfLikes=res
    },err=>{this.toastr.error(err.message)})
  }
  getArticleLikes(id:any)
  {
    this.http.post('https://localhost:44308/api/Article/GetArticleLikes/'+id,observable) 
    .subscribe((res)=>
    {
      
      this.articleLikes=res;
    },err=>{
      this.toastr.error(err.message);
    })
  }
 
  createUserActivity(body:any)
  {
    this.http.post('https://localhost:44308/api/UserActivitys/CreateUserActivity',body)
    .subscribe((res)=>
    {
    },err=>{this.toastr.error(err.message)})
  }

  userActivityLike:any=[{}]
  getUserActivityLike(id:any)
  {
    this.http.post('https://localhost:44308/api/UserActivitys/GetUserActivityLike/'+id,observable).subscribe((res)=>{
      this.userActivityLike=res;
    },err=>{this.toastr.error(err.message)})
  }

  
  
  BlockArticle(id:number,emailInfo:any)
  {
    debugger;
    emailInfo.to=this.userEmail[0].email;
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/BlockArticle/'+id)
    .subscribe((res)=>{
      this.spinner.hide();
      this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
      },err=>{this.toastr.error(err.message)});
      this.toastr.success('Blocked Successfully')
      
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message)
    })
  }

  UnBlockArticle(id:number,emailInfo:any)
  {
    emailInfo.to=this.userEmail[0].email;
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/UnBlockArticle/'+id)
    .subscribe((res)=>{
      this.spinner.hide();
      this.http.post('https://localhost:44308/api/JWT/SendEmail',emailInfo).subscribe((res)=>{
      },err=>{this.toastr.error(err.message)});
      this.toastr.success('UnBlocked Successfully')
      
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message)
    })
  }

  CreateReport(body:any)
  {
    this.spinner.show();
    this.http.post('https://localhost:44308/api/Reports',body).subscribe((res)=>
    {
      this.spinner.hide();
      this.toastr.success('Done')
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }
  
  DeleteReport(id:number)
  {
    ;
    this.spinner.show()
    this.http.delete('https://localhost:44308/api/reports/delete/'+id)
    .subscribe((res)=>{
      this.spinner.hide();
      this.toastr.success('deleted Successfully')
      
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message)
    })
  }
  GetAllReport()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/reports').subscribe((res)=>{
      this.reports=res;
      
      ;
      this.spinner.hide()
      this.toastr.success('Done')
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  homeTestimonial:any=[{}];
  GetTestimonialForm()
  {
    debugger
    this.http.get('https://localhost:44308/api/Testamonial/GetTestimonialForm')
    .subscribe((res)=>{
      this.homeTestimonial=res;
      console.log(this.homeTestimonial);
      
    },err=>{this.toastr.error(err.message)})
  }


  GetArticles()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/GetArticles').subscribe((res)=>{
      this.articles=res;
      this.activePost=this.articles.filter((x:any)=>x.blockStatus==1);
      this.blockedPost=this.articles.filter((x:any)=>x.blockStatus==2);
      debugger;
      this.spinner.hide()
      this.toastr.success('Done')
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  HomeInfo:any=[{}]
  getHomeInfo(){

    this.http.get('https://localhost:44308/api/Home').subscribe((res)=>{
    this.HomeInfo=res
    debugger
    },err=>{this.toastr.error(err.message)})
  }

  home:any=[{}];

  GetHome(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
   
    this.spinner.show();
    this.http.get('https://localhost:44308/api/home').subscribe((res)=>{
    this.home=res;
    
    debugger;
    this.spinner.hide();
    this.toastr.success('Success');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message);
      this.toastr.error(err.status);
    })

  }

  UpdateHome (body:any)
{
  this.spinner.show();
 
  if(this.display_Image!=null)
  {
    body.image1=this.display_Image;
  }
  debugger
  this.http.put('https://localhost:44308/api/home',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toastr.success('Updated |Successfully');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message);
  })
 // window.location.reload();
}


display_Image:any;
uploadHomeAttachment(file:FormData)
{
  debugger;
  this.http.post('https://localhost:44308/api/home/uploadImage',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.image1;//
      console.log(resp);
      debugger
    }
  },err=>{
    console.log(err);
    
  })
}




}

