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
  fichier?: string;
  marque?: string;
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
      createur: 'Sarah ',
      dateSoumission: '2025-04-10',
      statut: 'VALIDE',
      estTelecharge: true,
      feedback: { commentaire: 'Bon travail', note: 4 },
      fichier: '/assets/files/contenu1.pdf',
      marque: 'Marque A'
        },
    {
      id: '2',
      createur: 'Marc',
      dateSoumission: '2025-04-07',
      statut: 'EN_ATTENTE',
      estTelecharge: false,
      feedback: undefined,
      fichier: '/assets/files/contenu2.pdf',
      marque: 'Marque B'
    },
    {
      id: '3',
      createur: 'Emma',
      dateSoumission: '2025-04-08',
      statut: 'REFUSE',
      estTelecharge: false,
      feedback: { commentaire: 'Non conforme', note: 2 },
      fichier: '/assets/files/contenu3.pdf',
      marque: 'Marque C'
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
