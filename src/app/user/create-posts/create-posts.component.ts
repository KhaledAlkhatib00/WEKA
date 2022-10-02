import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  @ViewChild('collVisaDaialog')collVisaDaialog2!:TemplateRef<any>
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
   
};

  constructor(public home :HomeService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.GetUserVisaInfo(this.home.userId)
    this.home.GetAllCategory()
    
  
  
  }


  createForm:FormGroup=new FormGroup({
    articleTitel:new FormControl('',Validators.required),
    articleGrapgh:new FormControl('',Validators.required),
    publishDate:new FormControl('',Validators.required),
    categoryId:new FormControl(),
    // activeStatus:new FormControl('',Validators.required),
    //blockStatus:new FormControl('',Validators.required),
    articleImage:new FormControl('',Validators.required),
    userId:new FormControl()
  })

  emailForm:FormGroup=new FormGroup({
    to:new FormControl(),
    subject :new FormControl(),
    body:new FormControl(),

  })

  selectHandler(event:any)
  {
    this.createForm.controls['categoryId'].setValue(parseInt(event.target.value));

  }
  savePost(){
        this.createForm.controls['userId'].setValue(this.home.userId);
        this.home.createPost(this.createForm.value)
  }


    uplodeFile(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('files',fileToUpload,fileToUpload.name);
    this.home.uploadAttachment(formDate);
  }


  
  Titel:any=''
  inputValueEmail(ev:any)
  {
    this.Titel=ev.target.value;
  }
  checkArticleStatus()
  {
    debugger
    this.emailForm.controls['to'].setValue(this.home.userEmail[0]['email'])
    this.emailForm.controls['subject'].setValue(this.Titel +" has been banned")
    this.emailForm.controls['body'].setValue("Article "+this.Titel+" has been banned because it contains a bad word ")
    // let graphObj:string=this.graph.toString().toLowerCase();
    this.createForm.controls['userId'].setValue(this.home.userId);
    this.home.checkArticleStatus(this.createForm.value,this.emailForm.value)
  }
  
  cardNum:any=''
  inputValue1(ev:any)
  {
    this.cardNum=ev.target.value;
    console.log(ev.target.value);
  }
  yy:any=''
  inputValue2(ev:any)
  {
    this.yy=ev.target.value;
    console.log(ev.target.value);
  }
  mm:any=''
  inputValue3(ev:any)
  {
    this.mm=ev.target.value;
    console.log(ev.target.value);
  }
  cv:any=''
  inputValue4(ev:any)
  {
    this.cv=ev.target.value;
    console.log(ev.target.value);
  }

  checkPaymentInfo()
  {
    this.emailForm.controls['to'].setValue(this.home.userEmail[0]['email'])
    this.emailForm.controls['subject'].setValue("Payment")
    this.emailForm.controls['body'].setValue("You have paid 10$ to publish "+this.Titel+" \n your blance now is "+(this.home.userVisa[0]['blance']-10)+" $$")

    let cardNum:number=parseInt(this.cardNum) 
    let mm:number=parseInt(this.mm) 
    let yy:number=parseInt(this.yy) 
    let cv:number=parseInt(this.cv) 
    this.home.checkPayment(this.emailForm.value,cardNum,mm,yy,cv)
  }


  createVisaForm:FormGroup=new FormGroup(
    {
      visaNumber:new FormControl('',Validators.required),
      cv:new FormControl('',Validators.required),
      mm:new FormControl('',Validators.required),
      yy:new FormControl('',Validators.required),
      userId:new FormControl()          
    });


    OpenCreateVisaDaialog()
    {
      this.dialog.open(this.collVisaDaialog2)
    }

    CreateVisa()
    {
      this.createVisaForm.controls['userId'].setValue(this.home.userId);
      console.log(this.createVisaForm.value);
      
      this.home.createUserVisa(this.createVisaForm.value)
    }


    
}


