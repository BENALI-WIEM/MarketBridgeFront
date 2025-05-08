import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suivi-demande',
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.css']
})
export class SuiviDemandeComponent{
    demandes = [
  {
    pack: 'Pack Basique',
    date: new Date('2025-04-15'),
    createur: 'SARA GHRAM',
    statut: 'Acceptée',
  },
  {
    pack: 'Pack Intermédiaire',
    date: new Date('2025-04-20'),
    createur: 'MARAM LAHBIB',
    statut: 'En attente',
  },
  {
    pack: 'Pack Premium',
    date: new Date('2025-04-25'),
    createur: 'ROUA WALGA',
    statut: 'En attente',
  }
];
constructor(private router: Router) {}

goToHome(): void {
  this.router.navigate(['/brand-home']);
}
}