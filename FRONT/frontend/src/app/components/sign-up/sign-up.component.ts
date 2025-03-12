import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    this.authService.signUp(this.user).subscribe(response => {
      alert('Usuario registrado exitosamente');
      this.user = { username: '', password: '' };
      this.router.navigate(['/']);
    }, error => {
      alert('Error al registrar usuario');
    });
  }
}
