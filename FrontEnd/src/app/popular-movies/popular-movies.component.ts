import { Component, OnInit, Input } from '@angular/core';
import { ServiceHw8Service } from '../service-hw8.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
// import {type} from './home01Component/home01.component.html'
// import {Message} from 

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  resp: any;
  mobile: boolean = false;
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = false;
  // matched: any;
  send_data: any;
  //type: any;
  lo:any;
  media:any;
  // public isHover:boolean=false;

  @Input() type!: string;
  constructor(
    private service: ServiceHw8Service,
    private observer: BreakpointObserver,
    private router: Router) { }

  ngOnInit(): void {
 
    (this.observer.observe('(max-width: 700px)').subscribe((result) => {
      if (result.matches) {
        this.mobile = true;
      }
    }));

     if (this.type === 'continuewatching') {
      let t = JSON.parse(localStorage.getItem("continuewatching")!)
       t = t.reverse();
       this.resp = t;

      if (this.mobile !== true) {
        this.showNavigationIndicators = true;
        this.send_data = [];
        var j = -1;

        for (var i = 0; i < t.length; i++) {
          if (i % 6 == 0) {
            j++;
           // console.log("see where error is coming from","i=",i,t[i]);
            
            this.send_data[j] = [];
            this.send_data[j].push(t[i]);
          }
          else {
            this.send_data[j].push(t[i]);
          }
        }
       // console.log("cont watching final", this.send_data);
      }
    }
    else if (this.type == 'POPULAR') {
      this.media="movie"
      {
        this.service.PopularMovies().subscribe((response) => {
          this.resp = response;
          let t = response;

          if (this.mobile !== true) {
            this.showNavigationIndicators = true;
            this.send_data = [];
            var j = -1;

            for (var i = 0; i < t.length; i++) {
              if (i % 6 == 0) {
                j++;
                this.send_data[j] = [];
                this.send_data[j].push(t[i]);
              }
              else {
                this.send_data[j].push(t[i]);
              }
            }
           // console.log("---", this.send_data);
          }


        }, (error) => { console.log("ERRORs", error); })
      };
    }

    else if (this.type == 'TopMovies') {
      this.media="movie"
      this.service.TopRatedMovies().subscribe((response) => {
        this.resp = response;
        let t = response;

        if (this.mobile !== true) {
          this.showNavigationIndicators = true;
          this.send_data = [];
          var j = -1;

          for (var i = 0; i < t.length; i++) {
            if (i % 6 == 0) {
              j++;
              this.send_data[j] = [];
              this.send_data[j].push(t[i]);
            }
            else {
              this.send_data[j].push(t[i]);
            }
          }
        //  console.log("---", this.send_data);
        }


      }, (error) => { console.log("ERRORs", error); })
    }

    else if (this.type == 'TrendingMovies') {
      this.media="movie"
      this.service.TrendingMovies().subscribe((response) => {
        this.resp = response;
        let t = response;

        if (this.mobile !== true) {
          this.showNavigationIndicators = true;
          this.send_data = [];
          var j = -1;

          for (var i = 0; i < t.length; i++) {
            if (i % 6 == 0) {
              j++;
              this.send_data[j] = [];
              this.send_data[j].push(t[i]);
            }
            else {
              this.send_data[j].push(t[i]);
            }
          }
        //  console.log("---", this.send_data);
        }


      }, (error) => { console.log("ERRORs", error); })
    }

    else if (this.type == 'popularTV') {
      this.media="tv"
      this.service.PopularTV().subscribe((response) => {
        this.resp = response;
        let t = response;

        if (this.mobile !== true) {
          this.showNavigationIndicators = true;
          this.send_data = [];
          var j = -1;

          for (var i = 0; i < t.length; i++) {
            if (i % 6 == 0) {
              j++;
              this.send_data[j] = [];
              this.send_data[j].push(t[i]);
            }
            else {
              this.send_data[j].push(t[i]);
            }
          }
      //    console.log("---", this.send_data);
        }


      }, (error) => { console.log("ERRORs", error); })
    }
    else if (this.type == 'TVTopRated') {
      this.media="tv"
      this.service.TVTopRated().subscribe((response) => {
        this.resp = response;
        let t = response;

        if (this.mobile !== true) {
          this.showNavigationIndicators = true;
          this.send_data = [];
          var j = -1;

          for (var i = 0; i < t.length; i++) {
            if (i % 6 == 0) {
              j++;
              this.send_data[j] = [];
              this.send_data[j].push(t[i]);
            }
            else {
              this.send_data[j].push(t[i]);
            }
          }
       //   console.log("---", this.send_data);
        }


      }, (error) => { console.log("ERRORs", error); })
    }
    else if (this.type == 'TVtrending') {
      this.media="tv"
      this.service.TVtrending().subscribe((response) => {
        this.resp = response;
        let t = response;
      //  console.log("t",t);
        

        if (this.mobile !== true) {
          this.showNavigationIndicators = true;
          this.send_data = [];
          var j = -1;

          for (var i = 0; i < t.length; i++) {
            if (i % 6 == 0) {
              j++;
              this.send_data[j] = [];
              this.send_data[j].push(t[i]);
            }
            else {
              this.send_data[j].push(t[i]);
            }
          }
       //   console.log("---", this.send_data);
        }


      }, (error) => { console.log("ERRORs", error); })
    }
 

  }

  routeToPage(id: any,media:any)
  {

    console.log("routed here","this.media",media,"id = ",id);
    

      if ( media==="tv"){
        document.documentElement.scrollTop = 0;
        this.router.navigate(['/watch/tv/', id])
      
      }
      
  
    else   if (media==="movie"){
        document.documentElement.scrollTop = 0;
        this.router.navigate(['/watch/movie/', id])
      }
    }
  // routeToPage(id: any,media:any) {

  //   console.log("routed here","this.media",this.media,"id = ",id);
    
  //   if(this.type === 'continuewatching' ){
  //     if ( media==="tv"){
  //       document.documentElement.scrollTop = 0;
  //       this.router.navigate(['/watch/tv/', id])
  //     }
     
      
  
  //   else   if (media==="movie"){
  //       document.documentElement.scrollTop = 0;
  //       this.router.navigate(['/watch/movie/', id])
  //     }
  //   }
  //   else{
  //     if (this.media==="tv" ){
  //       document.documentElement.scrollTop = 0;
  //       this.router.navigate(['/watch/tv/', id])
  //     }
  //    else if (this.media==="movie" )
  //     {
  //       console.log("popular movies: this.media",this.media);
        
  //       document.documentElement.scrollTop = 0;
  //       this.router.navigate(['/watch/movie/', id])
  //     }
  //   }
 

     
    

  // }
}
  //Popular_Movies(mob: boolean)



