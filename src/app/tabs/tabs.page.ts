import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private authService: LoginService, private navCtrl: NavController) {}

  get isToken(){
    return localStorage.getItem('token') || undefined;
  }

  get isAdmin(){
    return localStorage.getItem('auth') === 'ROLE_ADMIN,ROLE_USER' || undefined;
  }

  cerrarSesion(){
    this.authService.logout();
    this.navCtrl.navigateRoot('tabs/tab3');
  }

}
