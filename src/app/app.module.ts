import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManualPage } from '../pages/manual/manual';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManualPage,
    Page2,
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
    Page2,
    PostDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
