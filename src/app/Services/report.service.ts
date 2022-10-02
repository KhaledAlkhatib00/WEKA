import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  NumOfUsers:any;
  articleReports:any=[{}];
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService
  ) { }

  //Get Number of Users
 getNumOfUsers()
 {
   this.http.get('https://localhost:44308/api/user/GetNumberOfUsers').subscribe((result) => {            
     this.NumOfUsers = result;      
   }, error => {
     this.toastr.error('Unable to connect the server.');
     this.toastr.error(error.message,error.status);
   });
 }

 GetAllReports()
 {
  this.spinner.show()
  this.http.get('https://localhost:44308/api/article/ArticleReport').subscribe((result) => {            
    this.articleReports = result;  
    debugger;  
    this.spinner.hide();  
  }, error => {
    this.spinner.hide();  
    this.toastr.error('Unable to connect the server.');
    this.toastr.error(error.message,error.status);
  });
 }

 allReportInfo:any=[{}]
 GetallReportInfo()
 {
  
  this.http.get('https://localhost:44308/api/Reports').subscribe
  ((res)=>{
    this.allReportInfo=res
    debugger
  },err=>{
    this.toastr.error(err.message)
  })
 }

 contactWihtAouter(body:any)
 {
  this.spinner.show()
    this.http.post('https://localhost:44308/api/JWT/SendEmail',body).subscribe((res)=>{
      this.spinner.hide()
      
    },err=>{
      this.spinner.hide
      this.toastr.error(err.message)
    })
      
 }
}