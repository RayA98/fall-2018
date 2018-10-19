import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { ProfilePage } from '../pages/profile/profile';
import { ExplorePage } from '../pages/explore/explore';
import { TabsPage } from '../pages/tabs/tabs';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    //ProfilePage,
    //ExplorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectFriendPage,
    //ProfilePage,
    //ExplorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryControllerProvider,
    FacebookControllerProvider,
    Facebook
  ]
})
export class AppModule {}
