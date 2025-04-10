import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]]
    });
  }

  private passwordValidator(control: any): { [key: string]: boolean } | null {
    if (!/[A-Z]/.test(control.value) || !/[0-9]/.test(control.value)) {
      return { 'passwordStrength': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const encryptedPassword = btoa(password); // Encodage en base64 (juste un exemple simple)

    console.log("Email:", email);
    console.log("Mot de passe crypté:", encryptedPassword);

    // Redirection vers la page d'accueil après connexion réussie
    this.router.navigate(['/home']);
  }

  
  goToRegisterBrand(): void {
    this.router.navigate(['/registerbrand']);  
  }

  
  goToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);  
  }
}
