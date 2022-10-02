import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportService } from 'src/app/Services/report.service';
import { StatisticsService } from 'src/app/Services/statistics.service';

@Component({
  selector: 'app-reported-article',
  templateUrl: './reported-article.component.html',
  styleUrls: ['./reported-article.component.css']
})
export class ReportedArticleComponent implements OnInit {

  constructor(public report:ReportService) { }

  ngOnInit(): void {
    debugger
  
    this.report.GetallReportInfo();
  }


  emailForm:FormGroup=new FormGroup({
    to:new FormControl(),
    subject :new FormControl(),
    body:new FormControl(),

  })
  contactAouther(email:any,titel:any,message:any,date:any,aouther:any)
  {
    this.emailForm.controls['to'].setValue(email);
    this.emailForm.controls['subject'].setValue("Reports")
    this.emailForm.controls['body'].setValue("Hello "+aouther+"\n"+"Your article "+titel+
    " has been reported at "+date+"\n"+"with report message :- "+message)

    this.report.contactWihtAouter(this.emailForm.value);
  }
}
