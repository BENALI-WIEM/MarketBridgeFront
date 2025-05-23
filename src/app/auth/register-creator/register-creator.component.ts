import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-creator',
  templateUrl: './register-creator.component.html',
  styleUrls: ['./register-creator.component.css']
})
export class RegisterCreatorComponent implements OnInit {

  registerForm!: FormGroup;
  countryCodes: { [key: string]: string } = {
    TN: "+216",
    US: "+1",
    FR: "+33",
    DE: "+49",
    GB: "+44",
    IT: "+39",
    ES: "+34",
    CA: "+1"
  };

  phonePlaceholder: string = '';  // Placeholder du téléphone
  phoneNumber: string = '';  // Numéro de téléphone
  logoPreview: string | ArrayBuffer | null = null; // Prévisualisation du logo

  constructor(private fb: FormBuilder, private router: Router) { }
  

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+\d{1,3}\d{8,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      logo: [null],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
      country: ['TN', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    }, { validators: this.matchPasswords });

    this.setPhonePlaceholder('TN');  // Définir le préfixe de la Tunisie par défaut
  }

  private passwordValidator(control: any): { [key: string]: boolean } | null {
    if (!/[A-Z]/.test(control.value) || !/[0-9]/.test(control.value)) {
      return { 'passwordStrength': true };
    }
    return null;
  }

  private matchPasswords(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }


  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(file);

      this.registerForm.patchValue({ logo: file });
    }
  }

  onCountryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const country = selectElement.value;

    // Vérifiez si le code du pays existe
    if (this.countryCodes[country]) {
      // Mettre à jour le numéro de téléphone et le placeholder en fonction du pays sélectionné
      this.phoneNumber = this.countryCodes[country];
      this.setPhonePlaceholder(country);
    } else {
      this.phoneNumber = ''; // Si aucun code n'est trouvé, videz le champ
    }
  }

  setPhonePlaceholder(country: string): void {
    this.phonePlaceholder = this.countryCodes[country];
  }
  

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const formData = this.registerForm.value;
    const phonePrefix = this.countryCodes[formData.country];
    formData.phoneNumber = phonePrefix + formData.phoneNumber;
    formData.password = btoa(formData.password);

    delete formData.confirmPassword;
    formData.avatar = formData.logo;

    console.log("Données du formulaire :", formData);
    this.router.navigate(['/home']);
  }
}