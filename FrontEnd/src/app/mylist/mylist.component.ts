import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  display: any;
  ifTrue: boolean = true;
  l: any;
  temp: any;
  mobile: boolean = false;
  isHover: boolean = false;

  mob0: boolean = false;
  lap0: boolean = false;
  lap1: boolean = false;
  constructor(private observer: BreakpointObserver,
    private router: Router) { }

  ngOnInit(): void {
    // let key  = "mylist"
    // localStorage.setItem(key, 'New Value');

    (this.observer.observe('(max-width: 700px)').subscribe((result) => {
      if (result.matches) {
        this.mobile = true;
      }
    }));

    if (localStorage.getItem("watchlist") === null) {
      this.ifTrue = true;
      console.log("watchlist is empty");

    }

    else {
      this.l = JSON.parse(localStorage.getItem("watchlist")!)


      if (this.l.length === 0) {
        console.log("it is empty array");
        this.ifTrue = true;

      }
      else {
        this.ifTrue = false;

        this.l = this.l.reverse();
        console.log("l", this.l);
        console.log("watchlist doesnt seem to be empty");

      }


      if (this.l.length === 0) {
        this.lap0 = true;
        this.mob0 = true;
        
        this.lap1 = false;
      }
      if (this.l.length < 6 && this.l.length > 0) {
        this.lap1 = true;
        this.lap0 = false;
        this.mob0 = false;
      }




    }

  }

  routeToPage(id: any, media: any) {
    if (media === "movie") {
      this.router.navigate(['/watch/movie/', id])
    }

    else {
      this.router.navigate(['/watch/tv/', id])
      console.log("movie", media);
      console.log("id", id);


    }



  }

}
