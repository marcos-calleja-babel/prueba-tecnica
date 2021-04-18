import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss'],
})
export class ValidationMessagesComponent {
  
  @Input() control: FormControl;
  @Input() enable: boolean;
  
  constructor(private validationService: ValidationService) { }

  get validationMessage() {
    for (let property in this.control.errors) {
      if (this.control.touched && this.control.errors.hasOwnProperty(property)) {
        return this.validationService.getValidationMessage(property, this.control.errors[property]);
      }
    }
    return null;
  }
}
