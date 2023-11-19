import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailOrPhoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      // If the value is empty, consider it valid (you may adjust this logic based on your requirements)
      return null;
    }

    // Check if the value contains letters (assumed to be an email)
    const hasLetters = /[a-zA-Z]/.test(value);

    // Check if the value is a valid email
    if (hasLetters && !isValidEmail(value)) {
      return { invalidEmail: true };
    }

    // Check if the value is a valid phone number
    if (!hasLetters && !isValidPhoneNumber(value)) {
      return { invalidPhoneNumber: true };
    }

    // If the value is either a valid email or a valid phone number, consider it valid
    return null;
  };
}

// Function to check if the input is a valid email
function isValidEmail(email: string): boolean {
  return email.includes('@');
}

// Function to check if the input is a valid phone number
function isValidPhoneNumber(phoneNumber: string): boolean {
  return /^\d{10}$/.test(phoneNumber);
}
