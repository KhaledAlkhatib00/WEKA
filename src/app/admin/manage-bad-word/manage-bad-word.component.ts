import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { _MatOptgroupBase } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { BadwordService } from 'src/app/Services/badword.service';

@Component({
  selector: 'app-manage-bad-word',
  templateUrl: './manage-bad-word.component.html',
  styleUrls: ['./manage-bad-word.component.css']
})
export class ManageBadWordComponent implements OnInit {

  @ViewChild('callupdateDailog') callupdateDailog! :TemplateRef<any>;
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>;
  constructor(public badword:BadwordService, private dialog:MatDialog) { }

  // badword:FormGroup=new FormGroup({
  //   id:new FormControl(''),
  //   badwords:new FormControl('')
  // })
  word=new FormControl('');
  CreateForm:FormGroup=new FormGroup({
    
    word:new FormControl('')
  })
  updateForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    word:new FormControl('')
  })
  ngOnInit(): void {
    this.badword.GetAll();
  }


  DeleteWord(id:number)
  {
    debugger;
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          this.badword.DeleteWord(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }


  p_data:any={};
  updateDailog(obj:any){
    debugger;
    this.p_data={
     Id:obj.id,
    word:obj.word
      
    }
    console.log(this.p_data);
    this.updateForm.controls['id'].setValue(this.p_data.Id); 
    
    
    this.dialog.open(this.callupdateDailog)
    
  }
  CreateDialog(){
    this.dialog.open(this.callCreateDailog);
  }
  UpdateWord(){
    debugger
    
    this.updateForm.controls['word'].setValue(this.word.value)
    this.badword.UpdateWord(this.updateForm.value);
  }

  CreateWord(){
    debugger
    this.CreateForm.controls['word'].setValue(this.word.value)
    this.badword.CreateWord(this.CreateForm.value);
  }



}
