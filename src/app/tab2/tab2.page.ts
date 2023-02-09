import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  users:any;
  allUsers: number = 0;

  constructor(
    private userService: PostService,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((data:any) =>{
      const accessToken = localStorage.getItem('token');
      if (!accessToken) {
        // Navegar a la página de login si no hay un token válido
        this.navCtrl.navigateRoot('tabs/tab3');
      }
      this.users = data;
      this.allUsers = data.total;
    })
  }
  
}