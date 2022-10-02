import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { HomeService } from 'src/app/Services/home.service';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-tostimonial',
  templateUrl: './tostimonial.component.html',
  styleUrls: ['./tostimonial.component.css']
})
export class TostimonialComponent implements OnInit {


  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>;
  constructor(public home:HomeService, private dialog:MatDialog,private test:TestimonialService,private router:Router) { }

  user2 : any =localStorage.getItem('user');
  user1:any=JSON.parse(this.user2);
  userId:any=parseInt(this.user1.groupsid);

  rating =new FormControl('');
  testForm:FormGroup=new FormGroup({
    userId:new FormControl(),
    messageText : new FormControl(''),
    rate:new FormControl('',[Validators.required]),
  });
  ngOnInit(): void {
  }

  rate:number=4;


  CreateDialog(){
    if(this.userId==null)
    {
      this.router.navigate(['../../../security/login']);
    }
    this.dialog.open(this.callCreateDailog);
  }
  select1()
  {
    this.testForm.controls['rate'].setValue(1)
  }
  select2()
  {
    this.testForm.controls['rate'].setValue(2)
  }
  select3()
  {
    this.testForm.controls['rate'].setValue(3)
  }
  select4()
  {
    this.testForm.controls['rate'].setValue(4)
  }
  select5()
  {
    this.testForm.controls['rate'].setValue(5)
  }

  CreateTestimonial()
  {
    this.testForm.controls['userId'].setValue(this.userId);
    // this.testForm.controls['rate'].setValue(this.rating);
    this.test.CreateTestemonial(this.testForm.value);
  }
}
