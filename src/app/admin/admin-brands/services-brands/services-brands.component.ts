import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Pack {
  id: string;
  name: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-services-brands',
  templateUrl: './services-brands.component.html',
  styleUrls: ['./services-brands.component.css']
})
export class ServicesBrandsComponent {
  packs: Pack[] = [
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

  ajouterPack() {
    this.router.navigate(['/add-services']);
  }

  modifierPack(pack: Pack) {
    this.router.navigate(['/edit-services', pack.id]);
  }
  

  supprimerPack(packId: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce pack ?")) {
      this.packs = this.packs.filter(p => p.id !== packId);
    }
  }
}