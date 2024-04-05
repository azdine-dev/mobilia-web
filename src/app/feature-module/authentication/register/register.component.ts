import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public routes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public show_password = true;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted: boolean = false;

  form = new FormGroup({
    // Username: new FormControl('dreamstechnologies', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
  get isFormValid() {
    return this.form.valid;
  }

  constructor(private auth: AuthService, private route: Router) {}

  signup() {
    this.submitted = true;
    if (this.form.valid) {
      const emailValue = this.form.get('email')?.value as string;
      const passwordValue = this.form.get('password')?.value as string;
      this.auth.signup(emailValue, passwordValue).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.route.navigate([routes.login]);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
}
