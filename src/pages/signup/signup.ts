import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController,public globalvarsProvider:GlobalvarsProvider) {

  }

  launchLoginpage(){
    console.log("Jumping to Login page");
    this.navCtrl.setRoot(LoginPage);
  }

  launchHome(){
    console.log("Jumping to home page");
    this.globalvarsProvider.loginState = true;
    this.navCtrl.setRoot(HomePage);
  }
}
