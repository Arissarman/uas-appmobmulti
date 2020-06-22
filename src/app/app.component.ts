import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {
    this.initialieApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  initialieApp() {     
    this.statusBar.overlaysWebView(true);     
    if (this.platform.is('android')) {       
      this.statusBar.backgroundColorByHexString("#33000000");     
    }   
  }
}

