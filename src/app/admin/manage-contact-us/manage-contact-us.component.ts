import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {

  constructor(public message:ContactService,private dialog:MatDialog) { }

  @ViewChild('callDeleteDailog') callDeleteDailog! :TemplateRef<any>;
  @ViewChild('callViewDailog') callViewDailog! :TemplateRef<any>;
  ngOnInit(): void {
    this.message.GetAllMessages();
  }

  ViewDialog(obj:any){

    const dialogVal= this.dialog.open(this.callViewDailog);
  }

  DeleteMessage(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.callDeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.message.DeleteMessage(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
  }

}
