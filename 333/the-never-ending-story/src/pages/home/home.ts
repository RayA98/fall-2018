import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectFriendPage } from '../select-friend/select-friend';
import { StoryControllerProvider } from '../../providers/story-controller/story-controller';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public firstChapter: string;

  constructor(public navCtrl: NavController, public storyCtrl: StoryControllerProvider) {

  }

  submitStory() {
    this.storyCtrl.saveStory(this.firstChapter)
      .then((storyId) => this.chooseFriends(storyId));
  }

  goToProfile() {
    this.navCtrl.setRoot(TabsPage);
  }

  chooseFriends(storyId: any) {
    this.navCtrl.push(SelectFriendPage, {storyId: storyId});
  }

}
