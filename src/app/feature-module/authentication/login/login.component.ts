import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TokenService } from 'src/app/shared/services/auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public show_password = true;
  public submitted = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  get isFormValid() {
    return this.form.valid;
  }
  get f() {
    return this.form.controls;
  }

  constructor(
    private auth: AuthService,
    private route: Router,
    private tokenStorage: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  signin() {
    this.submitted = true;
    if (this.form.valid) {
      const emailValue = this.form.get('email')?.value as string;
      const passwordValue = this.form.get('password')?.value as string;
      this.auth.signin(emailValue, passwordValue).subscribe({
        next: (data) => {
          this.tokenStorage.saveToken(data.data?.token);
          // this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.route.navigate([routes.userDashboard]);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        },
      });
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }

  reloadPage(): void {
    window.location.reload();
  }
}
