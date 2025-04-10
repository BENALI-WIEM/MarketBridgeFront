import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.css']
})
export class SettingsAdminComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: [''],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      const { email, oldPassword, newPassword } = this.settingsForm.value;
      console.log("✅ Mise à jour du compte :", this.settingsForm.value);
      // Appeler ici un service pour envoyer les modifications au backend
    } else {
      console.warn("⚠️ Formulaire invalide.");
    }
  }
}
