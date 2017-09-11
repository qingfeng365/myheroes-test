import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';

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
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
          this.router.navigate([redirect], navigationExtras);
        }
      });
  }
  logout() {
    this.authService.logout();
  }
}
