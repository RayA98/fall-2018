import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WritePage } from '../write/write';
import { StoryControllerProvider } from '../../providers/story-controller/story-controller';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private current: any;
  private past: any;
  private authored: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storyCtrl: StoryControllerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.storyCtrl.getProfile()
      .subscribe((data:any) => {
        this.current = data.current;
        this.past = data.past;
        this.authored  = data.authored;
      })
  }

  goToWrite() {
    this.navCtrl.push(WritePage);
  }

}
