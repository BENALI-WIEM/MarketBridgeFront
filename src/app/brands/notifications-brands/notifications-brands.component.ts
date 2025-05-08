import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notifications-brands',
  templateUrl: './notifications-brands.component.html',
  styleUrls: ['./notifications-brands.component.css']
})
export class NotificationsBrandsComponent {
  flashMessage: string = '';

  propositions: any[] = [
    {
      pack: 'Pack Basique',
      date: new Date(),
      driveLink: 'https://drive.google.com/...',
      status: 'En attente',
      showFeedback: false,
      rating: '',
      feedback: ''
    },
    {
      pack: 'Pack Premium ',
      date: new Date(),
      driveLink: 'https://drive.google.com/...',
      status: 'En attente',
      showFeedback: false,
      rating: '',
      feedback: ''
    }
  ];


  constructor(private router: Router) {}
  accepter(prop: any) {
    prop.status = 'Acceptée';
    prop.showFeedback = false;
    this.flashMessage = 'La demande a été acceptée. Vous pouvez maintenant procéder au paiement.';
    setTimeout(() => this.flashMessage = '', 4000); // disparaît après 4 sec
  }
  
  
  envoyerRefus(prop: any) {
    if (!prop.rating || !prop.feedback) {
      alert("Merci de remplir tous les champs de feedback.");
      return;
    }
    prop.status = 'Refusée';
    prop.showFeedback = false;
    console.log("Feedback envoyé :", {
      pack: prop.pack,
      rating: prop.rating,
      description: prop.feedback
    });
  }
  goToHome(): void {
    this.router.navigate(['/brand-home']);
  }
  redirectToPayment(prop: any): void {
    Swal.fire({
      title: 'Confirmer le paiement',
      text: `Voulez-vous vraiment payer le ${prop.pack} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f96e0b',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, payer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/payment'], {
          queryParams: {
            pack: prop.pack,
            date: prop.date,
            amount: prop.amount || 49.99
          }
        });
      }
    });
  }
}
