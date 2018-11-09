import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fb:Facebook) {

  }

  startAuth() {
    this.fb.login(['public_profile'])
      .then((res:any) => console.log('success', res))
      .catch(e => console.error(e));
  }

}
