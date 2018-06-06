import { Component, OnInit } from '@angular/core';
import { COMM } from '../commun-data';
import { SIG } from '../commun-sig';
import { MAILG } from '../commun-mail';
@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {
   currentOrientation = 'horizontal';
   currentJustify = 'fill';
   public myInterval: number = 300;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(){
        console.log(this.activeSlideIndex);
    }

    public slides:Array<Object> = [
        {"image":"../assets/img/women2.jpg"},
        {"image":"../assets/img/women1.jpg"},
        {"image":"../assets/img/women3.jpg"},
    ];
    details = COMM;
    details_sig = SIG;
    detail_mail = MAILG


  constructor() { }

  ngOnInit() {
  }

}
