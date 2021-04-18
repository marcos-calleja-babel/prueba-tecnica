import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email] should check email is invalid', () => {
    const email = component.loginForm.get('email');
    expect(email.valid).toBeFalsy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('wrongEmail');

    expect(email.errors['invalidEmail']).toBeTruthy();
  })

  it('[Email] should check email is valid', () => {
    const email = component.loginForm.get('email');
    email.setValue('valid@email.com');

    expect(email.errors).toBeNull();
  })

  it('[Password] should check password is invalid (minlength 5)', () => {
    const password = component.loginForm.get('password');
    expect(password.valid).toBeFalsy();
    expect(password.errors['required']).toBeTruthy();
    password.setValue('1234');
    expect(password.errors['minlength']).toBeTruthy();
  })

  it('[Password] should check password is valid (minlength 5)', () => {
    const password = component.loginForm.get('password');
    password.setValue('12345');
    expect(password.errors).toBeNull();
  })

});
