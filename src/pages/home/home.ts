import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoalsPage} from '../goals/goals';
import {WriteNowPage} from '../write-now/write-now';
import {MembershipPage} from '../membership/membership';
import {SalonsPage} from '../salons/salons';
import {DonatePage} from '../donate/donate';
import {ResourcesPage} from '../resources/resources';
import {FacebookPage} from '../facebook/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formattedDate;

  goToGoals() {
    this.navCtrl.push(GoalsPage, {

    })
  }
  goToWriteNow(){
    this.navCtrl.push(WriteNowPage, {

    })
  }
  goToMembership(){
    this.navCtrl.push(MembershipPage, {

    })
  }
  goToSalons(){
    this.navCtrl.push(SalonsPage, {

    })
  }
  goToDonate(){
    this.navCtrl.push(DonatePage, {

    })
  }
  goToResources(){
    this.navCtrl.push(ResourcesPage, {

    })
  }
  goToFacebook(){
    this.navCtrl.push(FacebookPage, {

    })
  }
  getFormattedDate(){
    var dateObj = new Date();
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()
    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
    //this.formattedDate = year + month + date;
    this.formattedDate = monthArray[month]+" "+date+", "+year;

  }
  currentDate;
  constructor(public navCtrl: NavController) {
    this.currentDate = new Date();
    this.getFormattedDate()
  }

  slider=[
    {
      image:"assets/imgs/image1.png"
    },
    {
      image:"assets/imgs/image2.png"
    },
    {
      image:"assets/imgs/image3.png"
    },
    {
      image:"assets/imgs/image4.png"
    },
    {
      image:"assets/imgs/image5.png"
    },
    {
      image:"assets/imgs/image6.png"
    }
  ];

}
