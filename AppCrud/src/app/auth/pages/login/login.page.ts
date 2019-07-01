import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSigIn: true,
    action: 'Login',
    actionChange: 'Criar conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }
  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }
  get name(): FormControl {
    return this.authForm.get('name') as FormControl;
  }
  ChangeAuthAction(): void {
    this.configs.isSigIn = !this.configs.isSigIn;
    const { isSigIn } = this.configs;
    this.configs.action = isSigIn ? 'Login' : 'Sing Up';
    this.configs.action = isSigIn ? 'Criar conta' : 'Sing Up ';
    !isSigIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  onSubmit(provier: AuthProvider): void {
    console.log('AuthForm', this.authForm.value);
    console.log('AuthProvider', this.authProviders.Email);
  }
}
