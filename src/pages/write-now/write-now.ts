import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserWritesPage} from '../user-writes/user-writes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

/**
 * Generated class for the WriteNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-now',
  templateUrl: 'write-now.html',
})
export class WriteNowPage {//start export class WriteNowPage
  timerVar;
  timerVal;
  todos: string[] = [];
  todo: string;
  //let start: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {//start Constructor
  //  this.startTimer();

  }//end Constructor

  ionViewDidLoad() {//start ionViewDidLoad
    console.log('ionViewDidLoad WriteNowPage');
  }//end ionViewDidLoad



  stopTimer(){
  this.timerVar.unsubscribe()
}//end stopTimer
add() {//start add
      this.todos.push(this.todo);
      this.todo = "";
  }//end add
delete(item) {//start delete
     var index = this.todos.indexOf(item, 0);
     if (index > -1) {
         this.todos.splice(index, 1);
     }
 }//end delete
 goToUserWrites() {
    this.navCtrl.push(UserWritesPage);

}

}//end export class WriteNowPage
