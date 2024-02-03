import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);

  constructor() {}

  // function ket noi API - service
  loginUser(user: any) {
    //POST: body
    console.log(user);
    
    return this.http.post(
      'https://hoadv-nodejs.vercel.app/auth/login',
      user
    );
  }
}