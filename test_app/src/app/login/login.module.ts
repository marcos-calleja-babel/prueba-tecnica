import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ValidationMessagesComponent } from '../components/validation-messages/validation-messages.component';
import { TranslateModule } from '@ngx-translate/core';
import { ShowOnDirective } from '../directives/show-on.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [LoginPage, ValidationMessagesComponent, ShowOnDirective]
})
export class LoginPageModule {}
