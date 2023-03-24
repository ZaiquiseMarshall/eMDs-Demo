import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../models/register-form.model';
import { RegistrationService } from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registerForm = {} as FormGroup;
  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  showPasswordModal: boolean = false;

  constructor(private registrationService: RegistrationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerForm = this.fb.group(
      {
       firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
       lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
        email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
        userName: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^[a-zA-Z0-9]+$")]],
        password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$")]],
        confirmPassword: ['', Validators.required]
      },
      {
        updateOn: "blur"
      });
  }

  registerUser() {
    let userData = this.registerForm.value as RegisterForm;
    if (this.registerForm.status === 'VALID' && this.registerForm.controls['confirmPassword'].value === this.registerForm.controls['password'].value) {
      this.registrationService.registerUser(userData).subscribe(res => {
        this.isSubmitted = true;
        res?.username ? this.isSuccess = true : this.isSubmitted = false
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.createRegistrationForm();
    this.isSubmitted = false;
  }

}
