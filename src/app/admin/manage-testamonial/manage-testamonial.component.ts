import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-manage-testamonial',
  templateUrl: './manage-testamonial.component.html',
  styleUrls: ['./manage-testamonial.component.css']
})
export class ManageTestamonialComponent implements OnInit {

  constructor(private dialog:MatDialog,public testimonial:TestimonialService) { }

 
 @ViewChild('callDeleteDailog') callDeleteDailog! :TemplateRef<any>;
 @ViewChild('callShowDailog') callShowDailog! :TemplateRef<any>;
 @ViewChild('callHideDailog') callHideDailog! :TemplateRef<any>;
 
  ngOnInit(): void {
    this.testimonial.GetAllTestimonial();
  }

  DeleteTestimonial(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.callDeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.testimonial.DeleteTestimonial(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }

  ShowTestimonial(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.callShowDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.testimonial.ShowTestimonial(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }


  HideTestimonial(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.callHideDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.testimonial.HideTestimonial(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }


}
