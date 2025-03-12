import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent {
  user = { username: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginUser() {
    this.authService.logIn(this.user.username, this.user.password).subscribe(users => {
      const userFound = users.find(u => u.username === this.user.username);

      if (userFound) {
        this.authService.setAuthenticated(true);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    }, error => {
      this.errorMessage = 'Error al conectar con el servidor';
    });
  }
}
