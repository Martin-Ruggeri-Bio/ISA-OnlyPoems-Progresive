import { Component} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username?: string;
  password?: string;
  rememberMe = true;

  constructor(private loginService: LoginService, private navCtrl: NavController) { }

  onSubmit(){
    console.log('Comprobando credenciales ...')
    this.loginService.login(this.username || '', this.password || '', this.rememberMe).subscribe({
      next: (rta) =>{
        if (!rta || !rta.id_token) {
          this.loginService.errorLogin();
          localStorage.removeItem('token');
          this.navCtrl.navigateRoot('tabs/tab3');
          return;
        }
        this.loginService.exitoLogin();
        // lo guardamos en el local storage al token
        localStorage.setItem('token', rta.id_token);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(rta.id_token);
        localStorage.setItem('auth', decodedToken.auth);
        this.navCtrl.navigateRoot('tabs/tab1');
      }, error: (error) =>{
        console.log('Error:', error)
        //alert('Credenciales Incorrectas')
        this.loginService.errorLogin();
        localStorage.removeItem('token')
      }, complete: () =>{
        console.log('Termino')
      }
    })
  }

}
