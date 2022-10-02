import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.auth.SignOut();
  }

  x:any|undefined=localStorage.getItem('user')
 
  user2 : any =localStorage.getItem('user');
   user1:any=JSON.parse(this.user2);
   userId:any=parseInt(this.user1.groupsid);

}
