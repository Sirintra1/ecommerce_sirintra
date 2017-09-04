import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { credentialModel } from "./login.model";
import { LoginServiceProvider } from "./login.service";
import { FacebookLoginService } from "../facebook-login/facebook-login.service";
import { TabsNavigationPage } from "../tabs-navigation/tabs-navigation";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  credential: credentialModel = new credentialModel();
  constructor(public facebookLoginService: FacebookLoginService, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public loginServiceProvider: LoginServiceProvider) {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {

  }

  doLogin() {
    this.credential = this.login.value;
    // let userdata = { "username": this.login.value.username, "password": this.login.value.password };
    // alert(JSON.stringify(userdata));
    this.loginServiceProvider.onAuthorization().then((data) => {
      this.navCtrl.pop();
    }, (error) => {
      console.error(error);
    });
  }

  doFacebookLogin() {
    this.facebookLoginService.getFacebookUser()
      .then((data) => {
        alert(JSON.stringify(data));
        // user is previously logged with FB and we have his data we will let him access the app
        this.navCtrl.setRoot(TabsNavigationPage);
      }, (error) => {
        //we don't have the user data so we will ask him to log in
        this.facebookLoginService.doFacebookLogin()
          .then((res) => {
            alert(JSON.stringify(res));
            this.navCtrl.setRoot(TabsNavigationPage);
          }, (err) => {
            alert("Facebook Login error" + err);
          });
      });
  }

  goToSignup() {
    this.navCtrl.push(RegisterPage);
  }

}
