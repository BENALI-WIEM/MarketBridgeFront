import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-formation',
  templateUrl: './formulaire-formation.component.html',
  styleUrls: ['./formulaire-formation.component.css']
})
export class FormulaireFormationComponent implements OnInit {
  registerForm!: FormGroup;
  packChoisi: string = '';
  prixPack: number = 0;
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

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.packChoisi = params['pack'] || 'Pack Basique';
      this.prixPack = this.getPrix(this.packChoisi);
    });

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/)
      ]],
      birthdate: ['', Validators.required],
      country: ['', Validators.required],

    });
    this.setPhonePlaceholder('TN');  // Définir le préfixe de la Tunisie par défaut
  }

  getPrix(pack: string): number {
    switch (pack) {
      case 'Pack Intermédiaire': return 600;
      case 'Pack Premium': return 400;
      default: return 250;
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
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formData = {
      ...this.registerForm.value,
      pack: this.packChoisi,
      prix: this.prixPack
    };
    const phonePrefix = this.countryCodes[formData.country];
    formData.phoneNumber = phonePrefix + formData.phoneNumber;
  
    console.log('✅ Formulaire soumis avec succès :', formData);
    // Traitement ou envoi à l’API
  }
}




