import { Component, OnInit } from '@angular/core';
import { ServiceHw8Service } from '../service-hw8.service'
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {
  searchTermModel: any;
  search: any;
  formatter: any;
  constructor(private service: ServiceHw8Service,
    private router: Router) { }

  ngOnInit(): void {
    this.search = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(term => this.service.TypeHeadData(term).pipe(
          tap(() => { console.log("received") }),
          catchError(() => {
            return of([]);
          })
        ),
        )

      );

    this.formatter = (x: { name: string }) => x.name;
  }
  RouteToHomePage() {
    this.router.navigate(['/'])
  }
  RouteToMyList() {
    this.router.navigate(['/mylist'])
  }

  Route(id: any, media: any) {
    console.log("this works");


  }

  selectedItem(item: any) {
    item.preventDefault();//empty textbox
    this.searchTermModel = null;

    // this.clickedItem=item.item;
    console.log(item);
    let k = item.item


    if (k.media_type === "movie") {
      let x = '/watch/movie/' + k.id;
      this.redirectTo(x);
      //this.router.navigate(['/watch/movie/', k.id])
      //this.searchTermModel = [];
      //document.getElementById('typeahead-http')!.value = "";

    }
    else {
      let x = '/watch/tv/' + k.id;
      this.redirectTo(x);
      // this.router.navigate(['/watch/tv/', k.id])
    }

    //  console.log("item id",typeof(item.));





  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
