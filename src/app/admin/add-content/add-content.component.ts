import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  contentForm!: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;
  fileSelected: boolean = false;
  isImage: boolean = false;
  isVideo: boolean = false;
  isPDF: boolean = false;
  marques = [
    {
      id: 1,
      nomComplet: 'Agence Pub',
      email: 'contact@pub.com',
      pays: 'France',
      nomMarque: 'PubX',
      telephone: '+33 6 01 02 03 04',
      logo: '/assets/img/logo1.png'
    },
    {
      id: 2,
      nomComplet: 'Brand Boost',
      email: 'hello@boost.com',
      pays: 'Canada',
      nomMarque: 'Boost',
      telephone: '+1 514 555 1234',
      logo: '/assets/img/logo2.png'
    }
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contentForm = this.fb.group({
      creator: ['', Validators.required],
      submissionDate: ['', Validators.required],
      marque: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const mimeType = file.type;

      this.isImage = mimeType.startsWith('image/');
      this.isVideo = mimeType.startsWith('video/');
      this.isPDF = mimeType === 'application/pdf';

      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);

      this.contentForm.patchValue({ file });
      this.fileSelected = true;
    }
  }

  onSubmit(): void {
    if (this.contentForm.valid && this.fileSelected) {
      console.log("Contenu soumis :", this.contentForm.value);

      const marqueSelectionnee = this.marques.find(m => m.id === +this.contentForm.value.marque);
      console.log("Contenu destiné à la marque :", marqueSelectionnee);

      // 🔁 TODO : envoyer au backend le contenu et la marque cible
    } else {
      console.warn("Veuillez remplir tous les champs et ajouter un fichier.");
    }
  }
}