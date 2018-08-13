import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoalsPage } from '../pages/goals/goals';
import { WriteNowPage } from '../pages/write-now/write-now';
import { MembershipPage } from '../pages/membership/membership';
import {SalonsPage} from '../pages/salons/salons';
import {DonatePage} from '../pages/donate/donate';
import {ResourcesPage} from '../pages/resources/resources';
import {FacebookPage} from '../pages/facebook/facebook';
import {BlankdocPage} from '../pages/blankdoc/blankdoc';
import {TimerPage} from '../pages/timer/timer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/*
<ion-menu [content]="mycontent">
  <ion-content>
    <ion-list>
    ...
    </ion-list>
  </ion-content>
</ion-menu>
*/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    TimerPage,
    BlankdocPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    TimerPage,
    BlankdocPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
