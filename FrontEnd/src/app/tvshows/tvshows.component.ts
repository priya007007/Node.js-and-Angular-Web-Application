import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHw8Service } from '../service-hw8.service' //
import { BreakpointObserver } from '@angular/cdk/layout';
import * as $ from "jquery";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  idUse: any;
  video_id: any;
  movie_details: any = null;
  mobile: any;
  twitter_share: any;
  fb_shar: any;
  cast: any;
  poster_path: any;
  title_here: any;
  det: any = {}
  media_type: string = "tv"
  move_the_value: any = {}

  array_local: any = []
  get_json: any
  rem_json: any
  count: number = 0

  cont_array: any = []
  get_json_c: any

  button_text: boolean = true;
  addeds: boolean = false;
  check_json: any;

  //models
  model_details: any;
  model_name: any;
  model_birthdate: any;
  model_gender: any;
  model_known_for: any;
  model_other_names: any;
  model_biography: any;
  model_homepage: any;
  model_place_of_birth: any;
  profile_path: any;


  bool_birth: boolean = true;
  bool_website: boolean = true;
  bool_birth_place: boolean = true;
  bool_gender: boolean = true;
  bool_known_for: boolean = true;
  bool_name: boolean = true;
  bool_other_names: boolean = true;
  bool_bio: boolean = true;

  isocials: any; //social media handles
  imdb_id: any;
  bool_imdb_id: boolean = true
  fb: any;
  bool_fb: boolean = true
  insta: any;
  bool_insta: boolean = true
  tweet: any;
  bool_tweet: boolean = true

  reviews: any; //reviews
  length_of_reviews: any;
  reviews_exist: boolean = true;


  resp_movie_details: any;
  showNavigationArrows_movie_details: boolean = true;
  showNavigationIndicators_movie_details: boolean = false;
  send_data_movie_details: any;


  similar_tv: boolean = true;
  recc_tv: boolean = true;



  recc_movie_details: any;
  desktop_recc: any;
  constructor(private Aroute: ActivatedRoute,
    private service: ServiceHw8Service,
    private observer: BreakpointObserver,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.Aroute.snapshot.paramMap.get('id');
    this.idUse = id;
    this.check_if_added_to_watchlist();

    (this.observer.observe('(max-width: 700px)').subscribe((result) => {
      if (result.matches) {
        this.mobile = true;
      }
    }));

    try {
      this.service.TVyoutube(id).subscribe((respons) => {
        this.video_id = respons;
        console.log("id", this.idUse);

        console.log("this.video_id", this.video_id);

        this.twitter_share = "https://twitter.com/intent/tweet?text=https://www.youtube.com/watch?v=" + this.video_id + "&hashtags=USC,CSCI571,FightOn"
        this.fb_shar = "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=" + this.video_id


      },
      )
    }

    catch {
      console.log("TVyoutube error!!!!")
    }
    try {
      this.service.TVdetails(id).subscribe((response) => {
        this.movie_details = response;
        this.title_here = this.movie_details.title;
      }
      )
    }
    catch {
      console.log("TVdetails error!!!!");
    }
    try {
      this.service.tv_posterPath(id).subscribe((response) => {
        this.poster_path = response;
      })
    }
    catch {
      console.log("Poster_path_watchlist error");
    }

    try {
      this.service.tv_CastList(id).subscribe((response) => {
        this.cast = response;
      })
    }
    catch {
      console.log("cast list error");
    }

    try {
      this.service.tv_reviews(id).subscribe((response) => {

        this.reviews = response
        // console.log("review response.avatar_path_here", this.reviews.avatar_path_here);
        // console.log(" this.reviews", this.reviews);

        this.length_of_reviews = Object.keys(this.reviews).length;
        if (this.length_of_reviews === 0) {
          this.reviews_exist = false;
        }



      })
    }
    catch {
      console.log("Review Details error");
    }

    try {
      this.service.tv_reccomend(id).subscribe((response) => {

        if (response === "No") {
          this.recc_tv = false;
        }
        else {
          this.Reccom_movies(this.mobile)
          this.recc_tv = true;
          console.log("Reccomended tv shows ", response);

        }
      })
    }
    catch {
      console.log("error: reccomended tv!!!!");
    }

    try {
      this.service.tv_similar(id).subscribe((response) => {
        if (response === "No") {
          this.similar_tv = false
        }
        else {
          this.Similar_movies(this.mobile);
          this.similar_tv = true
        }
        //console.log("Similar!! ", response);

      }
      )
    }
    catch {
      console.log("error : similar tv!!!!");
    }



    setTimeout(() => {
      this.continuewatching()
    }, 800);
  }

  continuewatching() {

    if (localStorage.getItem("continuewatching") === null) {
      this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type }
      console.log("if cw", this.det);


      this.cont_array.push(this.det)
      localStorage.setItem("continuewatching", JSON.stringify(this.cont_array))
    }
    else {
      let key1 = "continuewatching"
      this.get_json_c = JSON.parse(localStorage.getItem(key1)!);

      for (var i = 0; i < this.get_json_c.length; i++) {

        if (this.idUse === this.get_json_c[i].id && this.media_type === "tv") {

          this.get_json_c.splice(i, 1)
          break;
        }

      }

      this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type }
      console.log("else cw", this.det);


      this.get_json_c.push(this.det)

      if (this.get_json_c.length > 24) {
        this.get_json_c.shift()
      }

      localStorage.removeItem(key1);
      localStorage.setItem(key1, JSON.stringify(this.get_json_c))
      console.log("get_json_c length", this.get_json_c);


    }

  }

  add_to_local_storage() {

    if (localStorage.getItem("watchlist") === null) {
      this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type }
      this.array_local.push(this.det)
      localStorage.setItem("watchlist", JSON.stringify(this.array_local))
      console.log("thos det add_to_local_storage", this.det);
    }
    else {
      let key = "watchlist"
      this.get_json = JSON.parse(localStorage.getItem(key)!);
      // console.log("movie else get_json", this.get_json);

      this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type }
      //console.log("else this.del", this.det);

      this.get_json.push(this.det)
      //console.log("get_json pushed", this.get_json);

      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(this.get_json))
    }

  }
  remove_from_local_storage() {
    let key = "watchlist"
    this.rem_json = JSON.parse(localStorage.getItem(key)!);
    // console.log("to remove", this.idUse, "done");
    for (var i = 0; i < this.rem_json.length; i++) {
      //console.log("id parsing", this.rem_json[i].id);

      if (this.idUse === this.rem_json[i].id && this.media_type === "tv") {
        // console.log("to be removed", i);
        //console.log("before romoval", this.rem_json);

        this.rem_json.splice(i, 1)
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(this.rem_json))

      }
      //console.log("after removal", this.rem_json);
    }
  }

  Button_Clicked() {
    this.button_text = !this.button_text;
    //console.log("this.button_text", this.button_text);

    this.addeds = !this.addeds
    if (this.button_text === false) {
      this.add_to_local_storage()
      $(`#added`).show();
      setTimeout(function () {
        $(`#added`).hide();
      }, 5000)

      $(`#linkClose`).click(function () {
        $(`#added`).hide();
      });

    }
    else {
      this.remove_from_local_storage()
      $(`#removed`).show();
      setTimeout(function () {
        $(`#removed`).hide();
      }, 5000)

      $(`#linkClosehere`).click(function () {
        $(`#removed`).hide();
      });
    }
  };

  open_popup(castid: any, content: any, profile: any) {
    this.modalService.open(content, { size: 'lg' });
    this.profile_path = profile
    try {
      this.service.each_cast_model_s(castid).subscribe((response) => {
        this.model_details = response;
console.log("tv res",response);


        if (this.model_details.name === "" || this.model_details.name === null) { //name
          this.bool_name = false
          console.log("if  this.bool_name ", this.bool_name ,this.model_details.name);
          
        }
        else {
          this.model_name = this.model_details.name;
          this.bool_name = true
          console.log("else this.bool_name ", this.bool_name,this.model_details.name );
        }


        if (this.model_details.birthdate === "" || this.model_details.birthdate === null) { //birthdate
          this.bool_birth = false
        }
        else {
          this.model_birthdate = this.model_details.birthdate;
          this.bool_birth = true
        }


        if (this.model_details.gender === "" || this.model_details.gender === null) {//gender
          this.bool_gender = false
        }
        else {
          this.bool_gender = true
          this.model_gender = this.model_details.gender;
        }


        if (this.model_details.known_for_department === "" || this.model_details.known_for_department === null|| this.model_details.known_for_department === []) {//known for
          this.bool_known_for = false;
        }
        else {
          this.bool_known_for = true;
          this.model_known_for = this.model_details.known_for_department;
        }

        if (this.model_details.also_known_as===[]||this.model_details.also_known_as === "" || this.model_details.also_known_as === null|| this.model_details.also_known_as.length === 0) { //known as
          this.bool_other_names = false;
        }
        else {
          this.bool_other_names = true;
          this.model_other_names = this.model_details.also_known_as;
        }

        if (this.model_details.biography === "" || this.model_details.biography === null) {
          this.bool_bio = false;

        }
        else {
          this.bool_bio = true;
          this.model_biography = this.model_details.biography;

        }

        if (this.model_details.homepage === null || this.model_details.homepage === "") { //website
          this.bool_website = false;
        }
        else {
          this.model_homepage = this.model_details.homepage;
          this.bool_website = true;
        }


        if (this.model_details.place_of_birth === "" || this.model_details.place_of_birth === null) {
          this.bool_birth_place = false
        }
        else {
          this.bool_birth_place = true;
          this.model_place_of_birth = this.model_details.place_of_birth;
        }


        
        // this.model_name = this.model_details.name;
        // this.model_birthdate = this.model_details.birthdate;
        // if (this.model_birthdate === "") {
        //   this.bool_birth = false
        // }
        // this.model_gender = this.model_details.gender;
        // this.model_known_for = this.model_details.known_for_department;
        // this.model_other_names = this.model_details.also_known_as;
        // this.model_biography = this.model_details.biography;
        // this.model_homepage = this.model_details.homepage;
        // if (this.model_homepage === "") {
        //   this.bool_website = false;
        // }
        // this.model_place_of_birth = this.model_details.place_of_birth;
        // this.profile_path = profile
      }
      )
    }
    catch {
      console.log("ERROR!!!!");
    }

    try {
      this.service.each_cast_socials_s(castid).subscribe((response) => {
        this.isocials = response;

        if (this.isocials.imdb_id === "") {
          this.bool_imdb_id = false
        }
        else {
          this.bool_imdb_id = true
        }
        this.imdb_id = "https://www.imdb.com/name/" + this.isocials.imdb_id



        if (this.isocials.facebook_id === "") {
          this.bool_fb = false

        }
        else {
          this.bool_fb = true
        }


        this.fb = "https://www.facebook.com/" + this.isocials.facebook_id

        if (this.isocials.instagram_id === "") {
          this.bool_insta = false
        }
        else {
          this.bool_insta = true
        }
        this.insta = "https://www.instagram.com/" + this.isocials.instagram_id


        if (this.isocials.twitter_id === "") {
          this.bool_tweet = false
        }
        else {
          this.bool_tweet = true
        }

        this.tweet = "https://twitter.com/" + this.isocials.twitter_id
        //console.log("tweet id", this.tweet);
      }
      )
    }
    catch {
      console.log("ERROR!!!!");
    }
  }

  check_if_added_to_watchlist() {
    if (localStorage.getItem("watchlist") === null) {

    } else {
      // console.log("it does call", this.idUse);
      let key = "watchlist"
      this.check_json = JSON.parse(localStorage.getItem(key)!);
      //console.log("check_json", this.check_json);
      for (var i = 0; i < this.check_json.length; i++) {

        if (this.idUse === this.check_json[i].id && this.media_type === "tv") {
          this.button_text = false;
          // console.log("to be removed", i);
          //console.log("before romoval", this.check_json);
          this.move_the_value = this.check_json.splice(i, 1)
          // console.log("this.check_json", this.check_json);
          this.check_json.push(this.move_the_value[0])
          localStorage.removeItem(key);
          localStorage.setItem(key, JSON.stringify(this.check_json))
          //console.log("final", this.check_json);
          break;
        }

      }
    }
  }
  Similar_movies(mob: boolean) {
    this.service.tv_similar(this.idUse).subscribe((response) => {
      this.resp_movie_details = response;
      let t = this.resp_movie_details;
      //console.log(" this.resp_movie_details", this.resp_movie_details);
      var keys = Object.keys(this.resp_movie_details);
      if (mob !== true) {
        this.showNavigationIndicators_movie_details = true;
        this.send_data_movie_details = [];
        var j = -1;
        for (var i = 0; i < t.length; i++) {
          if (i % 6 == 0) {

            j++;
            this.send_data_movie_details[j] = [];
            this.send_data_movie_details[j].push(t[i]);
          }
          else {

            this.send_data_movie_details[j].push(t[i]);
          }
          // console.log("Sim_movies", this.send_data_movie_details);
        }

      }

    }, (error) => { console.log("error in recc tv", error); })
  };


  Reccom_movies(mob: boolean) {
    this.service.tv_reccomend(this.idUse).subscribe((response) => {
      this.recc_movie_details = response;

      let t = this.recc_movie_details;
      console.log(" thistv_reccomend", this.recc_movie_details);
      var keys = Object.keys(this.recc_movie_details);
      if (mob !== true) {
        this.showNavigationIndicators_movie_details = true;
        this.desktop_recc = [];
        var j = -1;
        for (var i = 0; i < t.length; i++) {
          if (i % 6 == 0) {
            console.log("entered if");

            j++;
            this.desktop_recc[j] = [];
            this.desktop_recc[j].push(t[i]);
          }
          else {
            console.log("entered else");

            this.desktop_recc[j].push(t[i]);
          }
          // console.log("recc_movies", this.desktop_recc);
        }

      }

    }, (error) => { console.log("error in recc movies", error); })
  };

  routeToPage(id: any) {


    // this.router.navigate(['/watch/movie/', id]);
    let x = '/watch/tv/' + id
    // this.ngOnInit();
    // console.log("Before or after??");
    document.documentElement.scrollTop = 0;
    this.redirectTo(x);

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
