import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts:any;
  allPosts: number = 0;

  constructor(
    private postService: PostService,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    // Verificar si hay un token de acceso válido almacenado en el dispositivo
    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      // Navegar a la página de login si no hay un token válido
      this.navCtrl.navigateRoot('tabs/tab3');
    }
    this.postService.getPosts().subscribe((data:any) =>{
      this.posts = data;
      this.allPosts = data.total;
    })
  }
  
}