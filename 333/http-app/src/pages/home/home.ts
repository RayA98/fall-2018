import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpClient
  ) {

    this.http.get(
      'https://jsonplaceholder.typicode.com/todos'
    ).subscribe(
      (response: any) => this.todos = response,
      (err) => console.error(err)
    );

  }

}
