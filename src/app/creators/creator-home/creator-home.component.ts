import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-home',
  templateUrl: './creator-home.component.html',
  styleUrls: ['./creator-home.component.css']
})
export class CreatorHomeComponent {
  packs = [
    {
      nom: 'Pack Basique',
      description: 'Création & production de contenu',
      prix: 250,
      objectif: "Apprendre à créer du contenu attractif et engageant pour les marques.",
      services: "Création du contenu",
      competences: [
        "Storytelling et rédaction persuasive",
        "Création de visuels et design graphique (Canva, Photoshop)",
        "Tournage et montage vidéo (Premiere Pro, CapCut)",
        "Optimisation du contenu pour les plateformes sociales"
      ]
    },
    {
      nom: 'Pack Intermédiaire',
      description: 'Gestion & analyse des comptes',
      prix: 400,
      objectif: "Apprendre à gérer les comptes de marques et analyser leurs performances.",
      services: "Gestion des comptes & Rapports d’analyse",
      competences: [
        "Community management",
        "Outils de gestion réseaux sociaux (Meta, Hootsuite...)",
        "Reporting des performances",
        "Stratégies de croissance"
      ]
    },
    {
      nom: 'Pack Premium',
      description: 'Publicité & Monétisation',
      prix: 600,
      objectif: "Apprendre à gérer les campagnes sponsorisées et optimiser la monétisation.",
      services: "Sponsoring publicitaire",
      competences: [
        "Campagnes sponsorisées (Facebook Ads, TikTok Ads, Google Ads)",
        "Ciblage et optimisation de budget",
        "Stratégie de monétisation (affiliation, UGC...)",
        "Amélioration des performances publicitaires"
      ]
    }
  ];

  constructor(private router: Router) {}

  postuler(packNom: string): void {
    this.router.navigate(['/formulaire-formation'], { queryParams: { pack: packNom } });
  }
  selectedPack: any = null;

  voirDetails(pack: any) {
    this.selectedPack = pack;
  }

  fermerDetails() {
    this.selectedPack = null;
  }

}
