import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://0.0.0.0:8080/api/authenticate';

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(username: string, password: string, rememberMe: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const dataLogin = {username, password, rememberMe};
    let rta = this.httpClient.post(this.url, dataLogin, { headers });
    console.log(rta);
    return rta;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
  }

  errorLogin(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'warning',
      title: 'Wrong credentials',
      text: 'Please try again'
    })
  }
}