import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) { }

  submit(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => alert('Login falhou')
    });
  }
}
