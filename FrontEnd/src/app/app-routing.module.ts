import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home01Component} from './home01/home01.component'
import {TvshowsComponent} from './tvshows/tvshows.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import{ MylistComponent} from './mylist/mylist.component';

const routes: Routes = [
   {path:'watch/movie/:id',component:MovieDetailsComponent},
   {path:'watch/tv/:id',component:TvshowsComponent},
   {path:'mylist',component:MylistComponent},
   {path: '**', component:Home01Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true }),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TvshowsComponent, Home01Component,MovieDetailsComponent ,MylistComponent]