import { Component, OnInit } from '@angular/core';
import { ServiceHw8Service } from '../service-hw8.service'
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home01',
  templateUrl: './home01.component.html',
  styleUrls: ['./home01.component.css']
})
export class Home01Component implements OnInit {
  slideshow_data: any
  allow: boolean = true;
  type = "I have been passed from parent"
  ifWorks: boolean = false;
  l: any;
  mobile:boolean=false;
  isHover:boolean=false;
  constructor(private service: ServiceHw8Service,   private router: Router, private observer: BreakpointObserver) { }

  ngOnInit() { //main function //CH //inside funct called
    // this.getDataTypeHead();
    this.getDataSlidesShow();
    (this.observer.observe('(max-width: 700px)').subscribe((result) => {
      if (result.matches) {
        this.mobile = true;
      }
    }));

    if (localStorage.getItem("continuewatching") === null) {
    }

    else {
      this.l = JSON.parse(localStorage.getItem("continuewatching")!)


      if (this.l.length === 0) {


      }
      else {
        this.ifWorks = true;
      }
    }

  }

  getDataSlidesShow() { //slideshow
    this.service.getDataSlideshowMovie().subscribe((response) => {
      this.slideshow_data = response

    }, (error) => {
      console.log("ERRORSSSS", error);
    })
  }
  routeToPage(id: any) {
    this.router.navigate(['/watch/movie/', id])

  }
}
