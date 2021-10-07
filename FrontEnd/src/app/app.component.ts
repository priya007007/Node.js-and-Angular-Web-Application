import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceHw8Service } from './service-hw8.service'
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, filter, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, OperatorFunction, Subject, merge, of } from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //cH part
  // private searchTerm = new Subject<string>();
  // observableSearchTerm = this.searchTerm.asObservable();

  // @ViewChild('type_here') type_here: NgbTypeahead; //use this.
  // focus$ = new Subject<string>();
  // click$ = new Subject<string>();

  searchTermModel: any;
  // public model: any;
  // statesWithFlags: any;
  // v: any;
  // resp: any;

  // h = "hello"

  search: any;
  formatter: any;

  constructor(
    private service: ServiceHw8Service,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
   // localStorage.clear()
    //throw 'error in source. Details: ' + err;
 




  }




}