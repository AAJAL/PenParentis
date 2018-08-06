import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountdownTimerPage } from './countdown-timer';

@NgModule({
  declarations: [
    CountdownTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(CountdownTimerPage),
  ],
})
export class CountdownTimerPageModule {}
