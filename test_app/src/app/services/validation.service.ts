import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private translate: TranslateService) { }

  getValidationMessage(validationName: string, validationValue?: any) {
    const validationMessages = {
      'required': this.translate.instant('REQUIRED_FIELD'),
      'email': this.translate.instant('INVALID_EMAIL'),
      'invalidEmail': this.translate.instant('INVALID_EMAIL'),
      'minlength': this.translate.instant('MIN_LENGTH', {'length': validationValue.requiredLength}),
    }
    return validationMessages[validationName] ? validationMessages[validationName] : undefined;
  }

  emailValidation(control: FormControl) {
    const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return !control.value || control.value.match(EMAIL_REGEX) ? null : {'invalidEmail': true};
  }
}
