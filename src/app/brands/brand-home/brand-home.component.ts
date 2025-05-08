import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: ['./brand-home.component.css']
})
export class BrandHomeComponent {
   packs = [
    {
      nom: 'Pack Basique',
      description: 'Création & modération de contenu de base',
      prix: 500,
      objectif: "Idéal pour les petites entreprises ou marques débutantes sur les réseaux sociaux.",
      services: "Création de contenu, modération simple, rapport mensuel",
      competences: [
        "Création de 8 publications (4 posts statiques, 2 reels, 2 carrousels)",
        "3 stories par semaine (12 stories par mois)",
        "Réponses aux messages/commentaires (2 fois par jour)",
        "Indicateurs de base (reach, likes, commentaires)"
      ]
    },
    {
      nom: 'Pack Intermédiaire',
      description: 'Gestion de communauté & analyse renforcée',
      prix: 800,
      objectif: "Pour une présence en ligne plus active et engagée.",
      services: "Création de contenu, animation & modération avancée, calendrier éditorial, rapport détaillé",
      competences: [
        "12 publications : 4 reels, 4 carrousels, 4 posts statiques",
        "4 stories par semaine (16 par mois)",
        "Animation de communauté & gestion avancée des commentaires",
        "Planification mensuelle validée avec le client",
        "Rapport mensuel détaillé : reach, engagement, clics"
      ]
    },
    {
      nom: 'Pack Premium',
      description: 'Stratégie complète avec publicité incluse',
      prix: 1200,
      objectif: "Pour les marques souhaitant maximiser leur visibilité et leurs performances.",
      services: "Création avancée, gestion complète, sponsoring, rapport analytique",
      competences: [
        "20 publications : 8 reels, 6 carrousels, 6 posts statiques",
        "Stories quotidiennes (30 par mois) + contenu interactif (quiz, sondages)",
        "Gestion complète : réponses, modération, veille stratégique",
        "Budget sponsoring de 150 TND/mois",
        "Rapport analytique avancé : KPIs détaillés et recommandations"
      ]
    }
  ];
  
  constructor(private router: Router) {}

  postuler(packNom: string): void {
    this.router.navigate(['/formulaire-service'], { queryParams: { pack: packNom } });
  }
  selectedPack: any = null;

  voirDetails(pack: any) {
    this.selectedPack = pack;
  }

  fermerDetails() {
    this.selectedPack = null;
  }

}
