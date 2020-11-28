import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// let token = '';
// tslint:disable-next-line: typedef
login() {
  const data = {
    username: (document.getElementById('username') as HTMLInputElement).value,
    password: (document.getElementById('password') as HTMLInputElement).value,
  };
  axios.post('http://localhost:3000/api/login', data)
    .then(res => {
      console.log(res);
      (document.getElementById('username') as HTMLInputElement).value = '';
      (document.getElementById('password') as HTMLInputElement).value = '';
      if (res && res.data && res.data.success) {
        const token = res.data.token;
        localStorage.setItem('jwt', token);
      }
    });
}

}

