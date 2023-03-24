import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterForm } from '../../models/register-form.model';
import { RegistrationFormComponent } from './registration-form.component';

describe('Component: RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegistrationFormComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(RegistrationFormComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('firstname field validity', () => {
    let errors = {};
    let firstname = component.registerForm.controls['firstName'];
    expect(firstname.valid).toBeFalsy();

    // Firstname field is required
    errors = firstname.errors || {};
    expect(errors).toBeTruthy();

    // Set firstname to something
    firstname.setValue("test");
    errors = firstname.errors || {};
    expect(errors).toBeTruthy();

    // Set email to firstname correct
    firstname.setValue("Tom");
    errors = firstname.errors || {};
    expect(errors).toBeFalsy();
  });

  it('lastname field validity', () => {
    let errors = {};
    let lastname = component.registerForm.controls['lastName'];
    expect(lastname.valid).toBeFalsy();

    // Lastname field is required
    errors = lastname.errors || {};
    expect(errors).toBeTruthy();

    // Set lastname to something
    lastname.setValue("test");
    errors = lastname.errors || {};
    expect(errors).toBeTruthy();

    // Set lastname to something correct
    lastname.setValue("Jenkins");
    errors = lastname.errors || {};
    expect(errors).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors).toBeFalsy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors).toBeFalsy();
  });

  it('username field validity', () => {
    let errors = {};
    let username = component.registerForm.controls['userName'];
    expect(username.valid).toBeFalsy();

    // Username field is required
    errors = username.errors || {};
    expect(errors).toBeTruthy();

    // Set username to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors).toBeTruthy();

    // Set username to something correct
    username.setValue("Testname1");
    errors = username.errors || {};
    expect(errors).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];

    // Password field is required
    errors = password.errors || {};
    expect(errors).toBeTruthy();

    // Set password to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors).toBeTruthy();

    // Set password to something correct
    password.setValue("@Marshall1");
    errors = password.errors || {};
    expect(errors).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['firstName'].setValue("Zaiquise");
    component.registerForm.controls['lastName'].setValue("Marshall");
    component.registerForm.controls['email'].setValue("test@test.com");
    component.registerForm.controls['userName'].setValue("Marshall1");
    component.registerForm.controls['password'].setValue("@Marshall1");
    component.registerForm.controls['confirmPassword'].setValue("@Marshall1");
    expect(component.registerForm.valid).toBeTruthy();
  });
});
