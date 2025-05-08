import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {
  editForm!: FormGroup;
  packPreview: string | ArrayBuffer | null = null;
  logoSelected: boolean = false;
  packId!: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.packId = Number(this.route.snapshot.paramMap.get('id'));

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });

    this.loadPackData(this.packId);
  }

  loadPackData(id: number): void {
    // Simulation
    const packData = {
      id,
      name: 'Pack Premium',
      description: 'Inclut 3 services exclusifs',
      imageUrl: '/assets/images/pack.png'
    };

    this.editForm.patchValue({
      name: packData.name,
      description: packData.description
    });

    this.packPreview = packData.imageUrl;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.packPreview = reader.result;
      };
      reader.readAsDataURL(file);

      this.editForm.patchValue({ image: file });
      this.logoSelected = true;
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log("Pack mis à jour :", this.editForm.value);
      // TODO: appel API ici
    } else {
      console.warn("Veuillez remplir les champs requis.");
    }
  }
}