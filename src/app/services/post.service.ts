import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://0.0.0.0:8080/api/posts?eagerload=false';
  headers = new HttpHeaders() || undefined;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    return this.httpClient.get(this.url, requestOptions);
  }
}