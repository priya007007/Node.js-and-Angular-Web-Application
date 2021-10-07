import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; //httpclient install //CH
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home01Component } from './home01/home01.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';//home 01
import { LayoutModule } from '@angular/cdk/layout';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MylistComponent } from './mylist/mylist.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ServiceHw8Service } from './service-hw8.service';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { FooterTryComponent } from './footer-try/footer-try.component';
import { HovercompComponent } from './hovercomp/hovercomp.component';
import { WatchlistHoverComponent } from './watchlist-hover/watchlist-hover.component' //works without it before

@NgModule({
  declarations: [
    AppComponent,
    Home01Component,
    TvshowsComponent,
    PopularMoviesComponent,
    MovieDetailsComponent,
    MylistComponent,
    TvshowsComponent,
    SearchNavComponent,
    FooterTryComponent,
    HovercompComponent,
    WatchlistHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //httpclient install //CH
    FormsModule,
     NgbModule,
    LayoutModule,
    YouTubePlayerModule
  ],
  providers: [ServiceHw8Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
