import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(
    private navCtrl: NavController
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token');
      const is_admin = localStorage.getItem('auth') === 'ROLE_ADMIN,ROLE_USER' || undefined;
      if(!token || !is_admin){
        this.navCtrl.navigateRoot('tabs/tab3')
        return false;
      }
        return true;
    }
  
}
