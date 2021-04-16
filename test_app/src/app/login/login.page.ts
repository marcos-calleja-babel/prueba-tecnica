import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  public remember: FormControl;

  public loginSubmit: boolean = false;

  constructor(private validationService: ValidationService, private authService: AuthService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.email = new FormControl('', [Validators.required, this.validationService.emailValidation]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);    
    this.remember = new FormControl(false);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
      remember: this.remember
    });
  }

  onLogin() {
    this.loginSubmit = true;
    this.loginForm.markAllAsTouched();

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const remember = this.loginForm.get('remember').value;

    if (this.loginForm.valid && this.authService.login(email, password, remember)) {      
      console.log("OK");
    }
  }
}
