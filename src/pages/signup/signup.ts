import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }

  launchLoginpage(){
    console.log("Jumping to Login page");
    this.navCtrl.setRoot(LoginPage);
  }
}
