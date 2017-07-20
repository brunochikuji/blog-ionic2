import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManualPage } from '../pages/manual/manual';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { PrimeiraGeracaoPage } from '../pages/primeira-geracao/primeira-geracao';
import { SegundaGeracaoPage } from '../pages/segunda-geracao/segunda-geracao';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManualPage,
    PrimeiraGeracaoPage,
    SegundaGeracaoPage,
    PostDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManualPage,
    PrimeiraGeracaoPage,
    SegundaGeracaoPage,
    PostDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
