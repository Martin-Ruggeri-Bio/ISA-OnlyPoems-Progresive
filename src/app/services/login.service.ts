import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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
    return this.httpClient.post<any>(this.url, dataLogin, { headers })
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
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
      icon: 'error',
      title: 'Wrong credentials',
      text: 'Please try again'
    })
  }
  exitoLogin(){
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
      icon: 'success',
      title: 'Login Exitoso',
      text: 'Go to home'
    })
  }
}