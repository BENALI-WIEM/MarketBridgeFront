import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {
  registerForm!: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  logoSelected: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required]
    });
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

      this.registerForm.patchValue({ image: file });
      this.logoSelected = true;
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.logoSelected) {
      console.log("Pack soumis :", this.registerForm.value);
      // TODO : Envoi vers le backend
    } else {
      console.warn("Formulaire invalide ou incomplet.");
    }
  }
}