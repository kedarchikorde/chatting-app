import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  newUser = { nickname: '', room: '' };
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  onLoggedin() {
    localStorage.setItem("user", JSON.stringify(this.newUser));
    localStorage.setItem('isLoggedin', 'true');
  }

}
