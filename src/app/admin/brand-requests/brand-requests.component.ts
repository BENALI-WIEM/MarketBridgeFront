import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-requests',
  templateUrl: './brand-requests.component.html',
  styleUrls: ['./brand-requests.component.css']
})
export class BrandRequestsComponent {
  constructor(private router: Router) {}

  demandes = [
    {
      id: 1,
      nomComplet: 'Brand A',
      email: 'brand@a.com',
      pays: 'France',
      nomMarque: 'MarqueA',
      telephone: '+33 6 01 02 03 04',
      pack: 'Pack Premium'
    },
    {
      id: 2,
      nomComplet: 'Brand B',
      email: 'brand@b.com',
      pays: 'Canada',
      nomMarque: 'MarqueB',
      telephone: '+1 514 000 1111',
      pack: 'Pack Intermédiaire'
    }
  ];

  ajouterContenu(marque: any) {
    // Vous pouvez passer l'ID ou des données via queryParams si besoin
    this.router.navigate(['/add-content'], { queryParams: { marqueId: marque.id } });
  }
}