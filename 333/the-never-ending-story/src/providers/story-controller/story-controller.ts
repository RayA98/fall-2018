import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Credentials } from '../creds';

/*
  Generated class for the StoryControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoryControllerProvider {

  private apiUrl = 'https://infinite-taiga-76404.herokuapp.com';

  constructor(
    public loadingCtrl: LoadingController,
    public http: HttpClient
  ) {
    console.log('Hello StoryControllerProvider Provider');
  }

  saveStory(chapter: string) {
    return new Promise((resolve, reject) => {
      let loader = this.loadingCtrl.create();
      loader.present();

      this.http.post(this.apiUrl + '/story', {}, {headers: this.buildHeaders()})
        .subscribe(data => {
            loader.dismiss();
            resolve();
        })
    });
  }

  listChaptersForAStory() {
    return this.http.get(
      this.apiUrl + `/chapters`,
      {headers: this.buildHeaders()}
    );
  }

  getProfile() {
    return this.http.get(
      this.apiUrl + '/profile',
      {headers: this.buildHeaders()}
    );
  }

  buildHeaders() {
    const creds = Credentials.getCreds();

    return new HttpHeaders()
      .set(
        "Authorization",
        "Basic " + btoa(`${creds.apiUser}:${creds.apiPassword}`)
      );
  }

}
