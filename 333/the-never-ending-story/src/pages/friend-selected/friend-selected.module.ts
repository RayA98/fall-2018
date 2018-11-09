import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendSelectedPage } from './friend-selected';

@NgModule({
  declarations: [
    FriendSelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendSelectedPage),
  ],
})
export class FriendSelectedPageModule {}
