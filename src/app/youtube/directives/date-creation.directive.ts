import { Directive, Input } from '@angular/core';
import {
  AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn,
} from '@angular/forms';

export function dateCreationValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = (new Date(control.value).getTime() - Date.now()) > 0;
    return forbidden ? { forbidden: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appDateCreation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateCreationDirective,
      multi: true,
    }],
})
export class DateCreationDirective {
  @Input('appDateCreation') dateCreation = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.dateCreation ? dateCreationValidator()(control) : null;
  }

  constructor() { }
}
