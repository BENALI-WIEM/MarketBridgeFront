import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Proposition {
  pack: string;
  date: Date;
  driveLink: string;
  status: 'En attente' | 'Acceptée' | 'Refusée';
  showFeedback: boolean;
  rating: string;
  feedback: string;
  amount?: number;
}

@Component({
  selector: 'app-notifications-brands',
  templateUrl: './notifications-brands.component.html',
  styleUrls: ['./notifications-brands.component.css']
})
export class NotificationsBrandsComponent {
  flashMessage: string = '';
  isPaymentConfirmed: boolean = false;

  propositions: any[] = [
    {
      pack: 'Pack Basique',
      date: new Date(),
      driveLink: 'https://drive.google.com/...',
      status: 'En attente',
      showFeedback: false,
      rating: '',
      feedback: '',
      creatorRating: '',
      showCreatorFeedback: false
    },
    {
      pack: 'Pack Premium',
      date: new Date(),
      driveLink: 'https://drive.google.com/...',
      status: 'En attente',
      showFeedback: false,
      rating: '',
      feedback: '',
      creatorRating: '',
      showCreatorFeedback: false
    }
  ];

  constructor(private router: Router) { }

  accepter(prop: any): void {
    prop.status = 'Acceptée';
    prop.showCreatorFeedback = true;
    prop.showFeedback = false;
    this.flashMessage = '✅ Demande acceptée. Veuillez noter le créateur avant de procéder au paiement.';
    setTimeout(() => this.flashMessage = '', 4000);
  }

  envoyerRefus(prop: any): void {
    if (!prop.rating || !prop.feedback) {
      alert('Veuillez remplir tous les champs pour refuser.');
      return;
    }
    prop.status = 'Refusée';
    this.flashMessage = '❌ Proposition refusée.';
    prop.showFeedback = false;
    setTimeout(() => this.flashMessage = '', 5000);
  }

  confirmerPaiement(prop: any): void {
    Swal.fire({
      title: 'Confirmation de paiement',
      text: 'Voulez-vous vraiment procéder au paiement ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#f96e0b',
      cancelButtonColor: '#333',
      confirmButtonText: 'Oui, payer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirectToPayment(prop);
      }
    });
  }
  goToHome(): void {
    this.router.navigate(['/brand-home']);
  }

  redirectToPayment(prop: any): void {
    Swal.fire({
      title: 'Confirmer le paiement',
      text: `Souhaitez-vous payer pour le ${prop.pack} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f96e0b',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, payer',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.isConfirmed) {
        // L'utilisateur a confirmé, enregistrer cet état et rediriger vers la page de paiement
        this.isPaymentConfirmed = true;
        this.router.navigate(['/payment'], {
          queryParams: {
            pack: prop.pack,
            date: prop.date.toISOString(),
            amount: prop.amount
          }
        });
      } else {
        // Si l'utilisateur annule, afficher un message d'annulation
        this.isPaymentConfirmed = false;
        Swal.fire({
          title: 'Annulation',
          text: 'Le paiement a été annulé. Vous pouvez revenir et choisir à nouveau.',
          icon: 'info',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Retour'
        });
      }
    });
  }

  // Méthode pour revenir à l'état précédent (avant la confirmation)
  goToPreviousState(): void {
    if (this.isPaymentConfirmed) {
      // Si l'utilisateur a déjà confirmé, réinitialiser l'état
      this.isPaymentConfirmed = false;
    } else {
      // Sinon, revenir à la page de notifications des marques
      this.router.navigate(['/notifications-brands']);
    }
  }

  annulerAcceptation(prop: any): void {
    Swal.fire({
      title: 'Annuler l’acceptation ?',
      text: 'Vous allez annuler votre acceptation. Confirmez-vous ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f96e0b',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, annuler',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result.isConfirmed) {
        prop.status = 'En attente';
        prop.showCreatorFeedback = false;
        prop.creatorRating = '';
        this.flashMessage = 'Vous avez annulé l’acceptation.';
        setTimeout(() => this.flashMessage = '', 3000);
      }
    });
  }
}