import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";

/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
countdown: number;
seconds: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
    this.startCountdownTimer(30);
    //this.secondsTimer();
  //  this.seconds;
  }
  startCountdownTimer(amountOfTime) {
    const interval = 1000;
    const duration = (amountOfTime * 1000);//This is what determines how long the timer should be
    const stream$ = Observable.timer(0, interval)
      .finally(() => console.log("All done!"))
      .takeUntil(Observable.timer(duration + interval))
      .map(value => duration - value * interval);
    stream$.subscribe(value => this.countdown = (value/1000.0)%60);
    //minutes = ((value/1000.0)/60)%60
  }
  /*
  secondsTimer(){
    const interval = 1000;
    const duration = ((10 * 1000)/1000.0)%60;//This is what determines how long the timer should be
    const stream$ = Observable.timer(0, interval)
      .finally(() => console.log("All done!"))
      .takeUntil(Observable.timer(duration + interval))
      .map(value => duration - value * interval);
    stream$.subscribe(value => this.seconds = value);
  }
*/

}
