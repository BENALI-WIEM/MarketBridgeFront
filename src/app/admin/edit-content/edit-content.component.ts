import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {
  editForm!: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;
  isImage = false;
  isVideo = false;
  isPDF = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      creator: ['', Validators.required],
      submissionDate: ['', Validators.required],
      file: [null]
    });

    this.loadContentData();
  }

  loadContentData(): void {
    // Simuler récupération des données
    const content = {
      creator: 'Sarah Dupont',
      submissionDate: '2025-04-09',
      fileUrl: '/assets/uploads/demo.pdf',
      fileType: 'application/pdf'
    };

    this.editForm.patchValue({
      creator: content.creator,
      submissionDate: content.submissionDate
    });

    this.previewUrl = content.fileUrl;
    this.detectFileType(content.fileType);
  }

  detectFileType(type: string): void {
    this.isImage = type.startsWith('image/');
    this.isVideo = type.startsWith('video/');
    this.isPDF = type === 'application/pdf';
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.detectFileType(file.type);

      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);

      this.editForm.patchValue({ file });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log('Contenu modifié :', this.editForm.value);
      // Ajout logique backend ici
    }
  }
}
