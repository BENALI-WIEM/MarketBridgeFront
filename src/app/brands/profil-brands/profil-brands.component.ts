import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profil-brands',
  templateUrl: './profil-brands.component.html',
  styleUrls: ['./profil-brands.component.css']
})
export class ProfilBrandsComponent  implements OnInit {
  profileForm!: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
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
  phoneNumber: string = '';  // Numéro de téléphone
  phonePlaceholder: string = '';  // Placeholder du téléphone
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/)]],
      country: ['', Validators.required],
      brandName: ['', [Validators.required]],
      newPassword: ['', [Validators.minLength(8)]],
      confirmPassword: [''],
      avatar: [null]
    }, { validators: this.matchPasswords });

    this.loadUserProfile();
    this.setPhonePlaceholder('TN');  // Définir le préfixe de la Tunisie par défaut
  }

  matchPasswords(group: AbstractControl): { [key: string]: any } | null {
    const pass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm || (!pass && !confirm) ? null : { passwordMismatch: true };
  }

  loadUserProfile(): void {
    const data = {
      fullName: 'Wiem Ben Ali',
      email: 'wiem@example.com',
      phoneNumber: '+216 12 345 678',
      dateOfBirth: '1998-05-12',
      gender: 'Femme'
    };
    this.profileForm.patchValue(data);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.profileForm.patchValue({ avatar: file });
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
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const updatedProfile = this.profileForm.value;
    console.log('🧾 Profil mis à jour :', updatedProfile);
    const formData = this.profileForm.value;
    const phonePrefix = this.countryCodes[formData.country];
    formData.phoneNumber = phonePrefix + formData.phoneNumber;
    formData.password = btoa(formData.password); // Encodage simple en base64
    delete formData.confirmPassword;
  
  }
  
}
