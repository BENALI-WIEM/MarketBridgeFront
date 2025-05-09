import { Component } from '@angular/core';

interface Createur {
  nom: string;
  specialite: string;
  plateformes: string[];
  note: number;
  followers: string;
  score: number;
  match: string;
}

@Component({
  selector: 'app-createurs-recommandes',
  templateUrl: './createurs-recommandes.component.html',
  styleUrls: ['./createurs-recommandes.component.css']
})
export class CreateursRecommandesComponent {
  filtreSpecialite = '';
  modalOuverte = false;

  tousLesCreateurs = [
    {
      nom: 'SARAGHRAM',
      specialite: 'Fashion',
      plateformes: ['TikTok'],
      note: 4.2,
      followers: '87.2K',
      score: 60,
      match: 'Moyenne'
    },
    {
      nom: 'ROUA_WALHA',
      specialite: 'Mode & Beauté',
      plateformes: ['TikTok', 'Instagram'],
      note: 4.8,
      followers: '162.7K / 131K',
      score: 95,
      match: 'Forte correspondance'
    },
    {
      nom: 'MARAM_LAHBIB',
      specialite: 'Lifestyle',
      plateformes: ['TikTok', 'Instagram'],
      note: 4.4,
      followers: '33K / 40.5K',
      score: 70,
      match: 'Bonne'
    }
  ];

  createurs = [...this.tousLesCreateurs];

  appliquerFiltre() {
    if (this.filtreSpecialite) {
      this.createurs = this.tousLesCreateurs.filter(c => c.specialite === this.filtreSpecialite);
    } else {
      this.createurs = [...this.tousLesCreateurs];
    }
  }
  ouvrirLogique() {
    this.modalOuverte = true;
  }

  fermerLogique() {
    this.modalOuverte = false;
  }
}