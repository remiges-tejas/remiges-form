import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateName(name: string): boolean {
    const namePattern = /^[a-zA-Z\s]*$/; // Only alphabets and spaces allowed
    return namePattern.test(name) && name.length > 1;
  }

  validatePhone(phone: string): boolean {
    const phonePattern = /^[0-9]{10}$/; // Exactly 10 digits
    return phonePattern.test(phone);
  }

  validateUsername(username: string): boolean {
    const usernamePattern = /^[a-zA-Z0-9]*$/; // Alphabets and digits only, no special characters
    return usernamePattern.test(username) && username.length >= 3;
  }
  validatePassword(password: string): boolean {
    // Password must be at least 6 characters long and include uppercase, lowercase, digit, and special character
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  }
}
