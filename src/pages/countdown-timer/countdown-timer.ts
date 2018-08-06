import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

/**
 * Generated class for the CountdownTimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countdown-timer',
  templateUrl: 'countdown-timer.html',
})
export class CountdownTimerPage {
  timerVar;
  timerVal;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownTimerPage');
  }
  startTimer(){
    this.timerVar = Observable.interval(1000).subscribe(x => {
      console.log(x)
      this.timerVal = x;
    })

  }//end startTimer
  stopTimer(){
  this.timerVar.unsubscribe()
}//end stopTimer


}
