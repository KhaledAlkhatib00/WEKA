import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  stastic:any=[{}];
  numberUsers:any=[{}];
  profit:any =[{}];
  losses:any=[{}];
  countFavorite:any=[{}];
  countComment:any=[{}];
  numberofarticle:any=[{}];
  message:string='This message from services'

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private http:HttpClient) { }



  GetCountOfArticle()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/article/GetCountOfArticle').subscribe((res)=>{
      this.numberofarticle=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }


  
  GetTheProfet()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/LikeArticle/GetTheProfet').subscribe((res)=>{
      this.profit=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }



    
  
  GetTheLosses()
  {
    this.spinner.show()
    this.http.get('https://localhost:44308/api/likeArticle/GetTheLosses').subscribe((res)=>{
      this.losses=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })
  }

  
  GetNumberOfUsers(){
  
    this.spinner.show()
    this.http.get('https://localhost:44308/api/user/GetNumberOfUsers').subscribe((res)=>{
      this.numberUsers=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })

  }

  GetCountOfFavorite(){
  
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Commentt/GetCountOfFavorite').subscribe((res)=>{
      this.countFavorite=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })

  }
  GetCountOfComment(){
  
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Commentt/GetCountOfComment').subscribe((res)=>{
      this.countComment=res;
      debugger;
      this.spinner.hide()

    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })

  }
  GetReport(){
  
    this.spinner.show()
    this.http.get('https://localhost:44308/api/Article/Report').subscribe((res)=>{
      this.stastic=res;
      debugger;
      this.spinner.hide()
    },err=>{
      this.spinner.hide()
      this.toastr.error(err.message)
    })

  }
  
}