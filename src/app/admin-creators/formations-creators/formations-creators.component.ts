import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Formation {
  id: string;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-formations-creators',
  templateUrl: './formations-creators.component.html',
  styleUrls: ['./formations-creators.component.css']
})
export class FormationsCreatorsComponent {
  formations: Formation[] = [
    {
      id: 'pack-1',
      name: 'Pack Basique',
      description: 'Création & Production de Contenu',
      image: '/assets/img/pack-basique.jpg'
    },
    {
      id: 'pack-2',
      name: 'Pack Intermédiaire',
      description: 'Gestion & Analyse des Comptes',
      image: '/assets/img/pack-intermediaire.jpg'
    },
    {
      id: 'pack-3',
      name: 'Pack Premium',
      description: 'Publicité & Monétisation',
      image: '/assets/img/pack-premium.jpg'
    }
  ];

  constructor(private router: Router) {}

  ajouterPackFormation() {
    this.router.navigate(['/add-formation']);
  }

  modifierPackFormation(formation: Formation) {
    this.router.navigate(['/edit-formation', formation.id]); // ✅ bonne syntaxe
  }

  supprimerPackFormation(formationId: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce pack de formation ?")) {
      this.formations = this.formations.filter(f => f.id !== formationId);
    }
  }
}