import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http' //CH
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ServiceHw8Service {

  constructor(private http: HttpClient) { } //CH

  TypeHeadData(name:any): Observable<any>    { //typehead
    console.log("name--works");
    
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/Typehead/${name}`) 
  } 
  getDataSlideshowMovie(): Observable<any>{
    return this.http.get('https://hw8gcptrialco.wl.r.appspot.com/slideshow')
  }
//////////////////////////////////////////////////////
  PopularMovies(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/popularMovies`)
  }

  TopRatedMovies(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TopRatedMovies`)
  }

  TrendingMovies(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TrendingMovies`)
  }

  PopularTV(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/PopularTVshows`)
  }

  TVTopRated(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TopRatedTV`)
  }

  TVtrending(): Observable<any>{
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TVTrending`)
  }
  ////////////////////////////////////////

  getVideoMovieDetails(id:any){ // ======(A)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/MovieVideoDetails/${id}`)

  }

  getMoviePosterPath(id:any){ //======(B)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/MoviePoster_path/${id}`)
  }

  getDataMovieDetails(id:any):Observable<any>{ //======(C)
    //console.log("service",id);  
    //let para = new HttpParams().set('id',id)
    //console.log("para",para);
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/MovieDetailsServer/${id}`)
  }

  get_Movie_Cast_Details(id:any):Observable<any>{ //======(D)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/Movie_Cast_Details/${id}`)
  }

  get_Movie_Review_List(id:any):Observable<any>{ //======(E)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/Movie_Review_List/${id}`)
  }
  get_Recommended_Movies(id:any):Observable<any>{//======(F)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/get_Recommended_Movies/${id}`)
  }

  Get_Similar_Movies(id:any):Observable<any>{//======(G)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/Get_Similar_Movies/${id}`)
  }

/////////////////////////////////////////////
TVyoutube(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TVvideoDetails/${id}`)

}
TVdetails(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TVdetails/${id}`)

}
tv_posterPath(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TVposter_path/${id}`)

}
tv_CastList(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TV_Cast_Details/${id}`)

}
tv_reviews(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/TV_Review_List/${id}`)

}
tv_reccomend(id:any){
  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/get_Recommended_TV/${id}`)

}
tv_similar(id:any){

  return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/Get_Similar_tv/${id}`)
} 
//////////////////////////////////
each_cast_model_s(castid:any){
   console.log("http://localhost:8080/each_cast_model/${castid}",`http://localhost:8080/each_cast_model/${castid}`,`https://hw8gcptrialco.wl.r.appspot.com/each_cast_model/${castid}`);
  
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/each_cast_model/${castid}`)
  }
  each_cast_socials_s(castid:any){
    console.log("`https://hw8gcptrialco.wl.r.appspot.com/each_cast_socials/${castid}`",`https://hw8gcptrialco.wl.r.appspot.com/each_cast_socials/${castid}`)
    return this.http.get(`https://hw8gcptrialco.wl.r.appspot.com/each_cast_socials/${castid}`)
  }
}
