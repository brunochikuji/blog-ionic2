import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { ManualPage } from '../pages/manual/manual';
import { HomePage } from '../pages/home/home';
import { PrimeiraGeracaoPage } from '../pages/primeira-geracao/primeira-geracao';
import { SegundaGeracaoPage } from '../pages/segunda-geracao/segunda-geracao';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Manuais', component: ManualPage },
      { title: 'Primeira geração', component: PrimeiraGeracaoPage },
      { title: 'Segunda geração', component: SegundaGeracaoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
