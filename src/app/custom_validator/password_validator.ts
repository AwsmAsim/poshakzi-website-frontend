import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      // If the value is empty, consider it valid (you may adjust this logic based on your requirements)
      return null;
    }

    // Use the built-in pattern validator to check if the password meets the specified pattern
    const patternValidator = Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

    // Run the pattern validator on the password value
    const patternValidationResult = patternValidator(control);

    // If the password meets the pattern, consider it valid
    if (patternValidationResult === null) {
      return null;
    }

    // If the password doesn't meet the pattern, return the validation error
    return { invalidPassword: true };
  };
}
