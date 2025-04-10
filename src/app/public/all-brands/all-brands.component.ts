import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.css']
})
export class AllBrandsComponent implements OnInit {
  services: Service[] = [

  { id: 'service-1', name: 'Création du contenu', image: '/assets/img/creationdecontenu.png' },
  { id: 'service-2', name: 'Gestion des comptes', image: '/assets/img/moderation.png' },
  { id: 'service-3', name: 'Rapports d\'analyse', image: '/assets/img/rapportddanalyse.png' },
  { id: 'service-4', name: 'Sponsorisation publicitaire', image: '/assets/img/sponsoring.jpg' },
  { id: 'service-5', name: 'Marketing digital', image: '/assets/img/marketing.png' },
  { id: 'service-6', name: 'Community Management', image: '/assets/img/community.png' },
  { id: 'service-7', name: 'Design Graphique', image: '/assets/img/design.jpg' },
  { id: 'service-8', name: 'Consulting', image: '/assets/img/consulting.png' },
  { id: 'service-9', name: 'Publicité en ligne', image: '/assets/img/publicite.png' },
  { id: 'service-10', name: 'SEO', image: '/assets/img/seo.png' },
  { id: 'service-11', name: 'Web Development', image: '/assets/img/webdev.png' },
  { id: 'service-12', name: 'App Development', image: '/assets/img/appdev.png' }
];

servicesPerPage: number = 6;
currentPage: number = 1;
paginatedServices: Service[] = [];

constructor(private router: Router) {}

ngOnInit(): void {
  this.displayServices();
}

goToHome(): void {
  this.router.navigate(['/']);
}

displayServices(): void {
  const start: number = (this.currentPage - 1) * this.servicesPerPage;
  const end: number = start + this.servicesPerPage;
  this.paginatedServices = this.services.slice(start, end);
}

updatePagination(): void {
  // Vous pouvez gérer ici la logique de pagination si nécessaire
}

getTotalPages(): number {
  return Math.ceil(this.services.length / this.servicesPerPage);
}

goToPage(page: number): void {
  this.currentPage = page;
  this.displayServices();
}

}