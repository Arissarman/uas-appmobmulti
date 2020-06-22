import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles;

  constructor(public navCtrl: NavController, private serviceProvider: ServiceProvider) {

  }

  ionViewDidEnter(){

    this.serviceProvider.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }


}
