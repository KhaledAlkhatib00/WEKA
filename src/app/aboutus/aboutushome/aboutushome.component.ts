import { Component, OnInit } from '@angular/core';
import { AboutusService } from 'src/app/Services/aboutus.service';

@Component({
  selector: 'app-aboutushome',
  templateUrl: './aboutushome.component.html',
  styleUrls: ['./aboutushome.component.css']
})
export class AboutushomeComponent implements OnInit {

  constructor(public about:AboutusService) { }

  ngOnInit(): void {
    this.about.getAboutInfo();
  }

}
