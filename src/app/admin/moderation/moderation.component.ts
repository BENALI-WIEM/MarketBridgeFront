import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Feedback {
  commentaire: string;
  note: number;
}

interface Contenu {
  id: string;
  createur: string;
  dateSoumission: string;
  statut: 'EN_ATTENTE' | 'VALIDE' | 'REFUSE';
  estTelecharge: boolean;
  feedback?: Feedback;
  noteCreateur?: number;
  lienDrive?: string;
  marque?: string;
  pack?: string;
}



@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent {
  contenus: Contenu[] = [
    {
      id: '1',
      createur: 'SARAGHRAM',
      dateSoumission: '2025-04-10',
      statut: 'VALIDE',
      estTelecharge: true,
      noteCreateur: 4.5,
      feedback: { commentaire: 'Bon travail', note: 4 },
      lienDrive: 'https://drive.google.com/file/d/xyz',
      marque: '9antra-Bridge',
      pack: 'Pack Premium'

        },
    {
      id: '2',
      createur: 'ROUA_WALHA',
      dateSoumission: '2025-04-07',
      statut: 'EN_ATTENTE',
      estTelecharge: false,
      noteCreateur: 3.5,
      feedback: undefined,
      lienDrive: 'https://drive.google.com/file/d/abc',     
      marque: '9ANTRA-PROJECTS',
      pack: 'Pack Basique'
    },
    {
      id: '3',
      createur: 'MARAM_LAHBIB',
      dateSoumission: '2025-04-08',
      statut: 'REFUSE',
      estTelecharge: false,
      noteCreateur: 2,
      feedback: { commentaire: 'Non conforme', note: 2 },
      lienDrive: 'https://drive.google.com/file/d/def',
      marque: 'The Bridge',
      pack: 'Pack Intermédiaire'
    }
  ];

  constructor(private router: Router) {}



  modifierContenu(contenu: Contenu) {
    this.router.navigate([`/edit-content/${contenu.id}`]);
  }

  supprimerContenu(contenuId: string) {
    if (confirm('Voulez-vous vraiment supprimer ce contenu ?')) {
      this.contenus = this.contenus.filter(c => c.id !== contenuId);
    }
  }
}
