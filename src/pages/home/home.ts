import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { PostDetailPage } from '../post-detail/post-detail'
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'http://prismaclubsp.com.br/wp-json/wp/v2/posts'
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: Http, private nav: NavController) {}

  ionViewDidLoad() {
  }
  ionViewDidEnter(){
    this.http.get( this.url )
    .map(res => res.json())
    .subscribe(data => {
      this.items = data;
    });
  }
  itemTapped(event, item) {
    this.nav.push(PostDetailPage, {
      item: item
    });
  }


}
