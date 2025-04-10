import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent {
 constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }
  goToBrands(): void {
    this.router.navigate(['/brands']);  
  }

  goToFaq(): void {
    this.router.navigate(['/faq']);  
  }

  services = [
    { id: 'service-1', name: 'Création du contenu', image: '/assets/img/creationdecontenu.png' },
    { id: 'service-2', name: 'Gestion des comptes', image: '/assets/img/moderation.png' },
    { id: 'service-3', name: 'Rapports d\'analyse', image: '/assets/img/rapportddanalyse.png' },
    { id: 'service-4', name: 'Sponsorisation publicitaire', image: '/assets/img/sponsoring.jpg' }
  ];

  activeService = this.services[0];

  setActiveService(service: any) {
    this.activeService = service;
  }
}
