import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../../app/service/validation.service';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name: string = '';
  phone: string = '';
  username: string = '';
  password: string = '';

  isNameValid: boolean = true;
  isPhoneValid: boolean = true;
  isUsernameValid: boolean = true;
  isPasswordValid: boolean = true;

  constructor(
    private validationService: ValidationService,
    private logger: LoggerService
  ) {}

  validateName(): void {
    this.isNameValid =
      this.name.trim() !== '' && this.validationService.validateName(this.name);
  }

  validatePhone(): void {
    this.isPhoneValid =
      this.phone.trim() !== '' &&
      this.validationService.validatePhone(this.phone);
  }

  validateUsername(): void {
    this.isUsernameValid =
      this.username.trim() !== '' &&
      this.validationService.validateUsername(this.username);
  }

  validatePassword(): void {
    this.isPasswordValid =
      this.password.trim() !== '' &&
      this.validationService.validatePassword(this.password);
  }

  validateAllFields(): void {
    this.validateName();
    this.validatePhone();
    this.validateUsername();
    this.validatePassword();
  }

  resetForm(): void {
    this.name = '';
    this.phone = '';
    this.username = '';
    this.password = '';
    this.isNameValid = true;
    this.isPhoneValid = true;
    this.isUsernameValid = true;
    this.isPasswordValid = true;
  }

  saveToLocalStorage(): void {
    // Validate all fields before saving
    this.validateAllFields();

    if (
      this.isNameValid &&
      this.isPhoneValid &&
      this.isUsernameValid &&
      this.isPasswordValid
    ) {
      const formData = {
        name: this.name,
        phone: this.phone,
        username: this.username,
        password: this.password,
      };

      this.logger.log('Name:' + this.name);
      this.logger.log('Phone:' + this.phone);
      this.logger.log('Username:' + this.username);
      this.logger.log('Password:' + this.password);

      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Form data saved successfully!');
    } else {
      // alert('Please ensure all fields are valid before submitting.');
    }
  }
}
