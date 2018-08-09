import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TimerPage} from '../timer/timer';
//import { TimerComponent } from '../timer/timer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

/**
 * Generated class for the GoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {
  timerVar;
  timerVal;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalsPage');
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

   goToCountdown(){
     this.navCtrl.push(TimerPage,{

     })
   }
   openTimerPage(){
     
     this.navCtrl.push(TimerPage);
   }


}
