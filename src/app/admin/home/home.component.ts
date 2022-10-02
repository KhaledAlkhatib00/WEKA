import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReportService } from 'src/app/Services/report.service';
import { StatisticsService } from 'src/app/Services/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
 
  constructor(public repoService:ReportService, public statistic:StatisticsService) { }

  ngOnInit(): void {
   this.repoService.getNumOfUsers();
   this.statistic.GetCountOfArticle();
   this.statistic.GetTheLosses();
   this.statistic.GetTheProfet();
   this.statistic.GetCountOfComment();
   this.statistic.GetCountOfFavorite();
  }



}