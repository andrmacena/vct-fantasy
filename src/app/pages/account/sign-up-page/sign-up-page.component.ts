import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  constructor(private dataService: DataService, private router: Router) { }

  signUp(email: string, password: string) {
    this.dataService.createUser(email, password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => alert('Falha ao criar usuário')
    });
  }

}
