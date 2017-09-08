import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService
      .login()
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          const redirect =
            this.authService.redirectUrl
              ? this.authService.redirectUrl
              : '/admin';
          this.router.navigate([redirect]);
        }
      });
  }
  logout() {
    this.authService.logout();
  }
}
