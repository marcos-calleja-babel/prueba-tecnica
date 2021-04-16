import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private validationService: ValidationService) { }

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
    if (this.loginForm.valid) {
      console.log("OK");      
    }
  }
}
