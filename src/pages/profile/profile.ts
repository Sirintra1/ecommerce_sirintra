import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../profile/profile.model';
import { ProfileServiceProvider } from '../profile/profile.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: ProfileModel = new ProfileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProfileServiceProvider,public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ProfilePage');
    this. getProfileData();
  }
  getProfileData() {
    this.profileService
      .getProfile()
      .then((data) => {
        this.profileData = data;
      }, (err) => {
        this.log.error(err);
      });
  }
}
