import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';
import { StatisticsService } from 'src/app/Services/statistics.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public report:ReportService , public statistic:StatisticsService) { }
  fileName= 'WekaReport.xlsx';

  ngOnInit(): void {
    this.report.GetAllReports();
    this.report.getNumOfUsers();
    this.statistic.GetCountOfArticle();
    this.statistic.GetTheLosses();
    this.statistic.GetTheProfet();
    this.statistic.GetCountOfComment();
    this.statistic.GetCountOfFavorite()
  }



  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
