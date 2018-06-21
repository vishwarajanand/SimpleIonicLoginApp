import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController) {

  }


  launchLoginpage() {
    console.log("Jumping to Login page");
    this.navCtrl.setRoot(LoginPage);
  }
}
