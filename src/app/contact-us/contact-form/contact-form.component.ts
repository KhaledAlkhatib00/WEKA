import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(public contact :ContactService) { }

  ngOnInit(): void {
    this.contact.contactInfo();
  }

  createForm:FormGroup=new FormGroup({
    
    messageText:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email])
  })
  createContact(){
    debugger
    this.contact.CreateMessage(this.createForm.value)
  }

  
}

