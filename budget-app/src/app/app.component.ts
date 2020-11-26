import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'budget-app';
  constructor() { }

  ngOnInit(): void {
  }

}


// // let token = '';
// login() {
//   const data = {
//     username: document.getElementById('username').value,
//     password: document.getElementById('password').value,
//   };
//   axios.post('/api/login', data)
//     .then(res => {
//       console.log(res);
//       document.getElementById('username').value = '';
//       document.getElementById('password').value = '';
//       if (res && res.data && res.data.success) {
//         const token = res.data.token;
//         localStorage.setItem('jwt', token);
//       }
//     });
// }
