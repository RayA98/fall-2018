import { Component } from '@angular/core';
import { StoryControllerProvider } from '../../providers/story-controller/story-controller';

/**
 * Generated class for the StoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'story',
  templateUrl: 'story.html'
})
export class StoryComponent {

  text: string;
  private chapters = [
    {text: 'someTextHere'},
    {text: 'someTextHere'},
    {text: 'someTextHere'},
    {text: 'someTextHere'},
  ];

  constructor(public storyCtrl: StoryControllerProvider) {
    console.log('Hello StoryComponent Component');
    this.text = 'Hello World';

    this.storyCtrl.listChaptersForAStory().subscribe(
      (data: any) => this.chapters = data,
      err => console.error(err)
    );
  }

}
