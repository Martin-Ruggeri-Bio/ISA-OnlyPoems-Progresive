import { Component} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username?: string;
  password?: string;
  rememberMe = true;

  constructor(private loginService: LoginService) { }

  onSubmit(){
    console.log('Comprobando credenciales ...')
    this.loginService.login(this.username || '', this.password || '', this.rememberMe).subscribe({
      next: (rta) =>{
        alert('Login Exitoso');
        // lo guardamos en el local storage al token
        console.log(rta)
        localStorage.setItem('token', rta.id_token);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(rta.id_token);
        localStorage.setItem('auth', decodedToken.auth);
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
