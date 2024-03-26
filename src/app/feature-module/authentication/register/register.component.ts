import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/authservice';

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
  form = new FormGroup({
    Username: new FormControl('dreamstechnologies', [Validators.required]),
    email: new FormControl('admin@dreamstechnologies.in', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  signup() {
    if (this.form.valid) {
      this.auth.signup();
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
}
