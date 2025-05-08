import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profileForm!: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      newPassword: ['', [Validators.minLength(8)]],
      confirmPassword: [''],
      avatar: [null]
    }, { validators: this.matchPasswords });

    this.loadUserProfile();
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

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const updatedProfile = this.profileForm.value;
    console.log('🧾 Profil mis à jour :', updatedProfile);
  }
}
