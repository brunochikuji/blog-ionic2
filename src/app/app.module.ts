import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManualPage } from '../pages/manual/manual';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { PrimeiraGeracaoPage } from '../pages/primeira-geracao/primeira-geracao';
import { SegundaGeracaoPage } from '../pages/segunda-geracao/segunda-geracao';

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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
