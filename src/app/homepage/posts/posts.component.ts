import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() id :number|undefined
@Input() articleTitel :string|undefined
@Input() articleGrapgh :string|undefined
@Input() publishDate  :string|undefined
@Input() categoryId  :number|undefined
@Input() activeStatus  :number|undefined
@Input() blockStatus  :number|undefined
@Input() views :string|undefined
@Input() articleImage :string|undefined



  constructor(public home:HomeService) { }

  ngOnInit(): void {
  }

}
