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
  modalOuverte: boolean = false;
  filtreNom: string = '';
  filtreSpecialite: string = '';

  createurs: Createur[] = [
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

  createursFiltres = [...this.createurs];

  appliquerFiltre() {
    const nom = this.filtreNom.trim().toLowerCase();
    const specialite = this.filtreSpecialite;

    this.createursFiltres = this.createurs.filter(c => {
      const correspondNom = c.nom.toLowerCase().includes(nom);
      const correspondSpec = specialite ? c.specialite === specialite : true;
      return correspondNom && correspondSpec;
    });
  }

  ouvrirLogique() {
    this.modalOuverte = true;
  }

  fermerLogique() {
    this.modalOuverte = false;
  }
}
