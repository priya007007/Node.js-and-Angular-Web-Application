import { Component, Input, OnInit } from '@angular/core';
import { PopularMoviesComponent } from '../popular-movies/popular-movies.component';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hovercomp',
  templateUrl: './hovercomp.component.html',
  styleUrls: ['./hovercomp.component.css']
})
export class HovercompComponent implements OnInit {
  // @Input() poster:object;
  // @Input() title:object;
  @Input() poster:string|undefined;
  @Input() id:string|undefined;
  @Input() media_type:string|undefined;
  @Input() title:string|undefined;
  public isHover:boolean=false;
  constructor(private router: Router,private observer: BreakpointObserver) {}
public mobile:boolean=false

  ngOnInit(): void {
    (this.observer.observe('(max-width: 700px)').subscribe((result) => {
      if (result.matches) {
        this.mobile = true;
      }
    }));
  }
  routeToPage(id: any,media:any) {

    console.log("routed here","this.media",media,"id = ",id);
    

      if ( media==="tv"){
        let x = '/watch/tv/'+ id
        document.documentElement.scrollTop = 0;
        this.redirectTo(x);
       
      
      }
      
    else   if (media==="movie"){
      let x = '/watch/movie/'+ id
        document.documentElement.scrollTop = 0;
        this.redirectTo(x);
        
      }
    }
    redirectTo(uri:string){
         this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
         this.router.navigate([uri]));
       }
   
      
    }



 

     
    

 