import { Component, OnInit } from '@angular/core';

interface Proposition {
  id: number;
  pack: 'Pack Basique' | 'Pack Intermédiaire' | 'Pack Premium';
  contentUrl: string; 
  status: 'En attente' | 'Acceptée' | 'Refusée';
  date: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  propositions: Proposition[] = [];

  ngOnInit(): void {
    this.loadPropositions();
  }

  loadPropositions(): void {
    this.propositions = [
      {
        id: 1,
        pack: 'Pack Basique',
        contentUrl: 'https://example.com/basique-details.pdf',
        status: 'En attente',
        date: '2025-04-29'
      },
      {
        id: 2,
        pack: 'Pack Intermédiaire',
        contentUrl: 'https://example.com/intermediaire-details.pdf',
        status: 'Acceptée',
        date: '2025-04-28'
      },
      {
        id: 3,
        pack: 'Pack Premium',
        contentUrl: 'https://example.com/premium-details.pdf',
        status: 'Refusée',
        date: '2025-04-27'
      }
    ];
  }

  accepter(prop: Proposition): void {
    prop.status = 'Acceptée';
    console.log(`✅ Proposition ${prop.id} acceptée`);
  }

  refuser(prop: Proposition): void {
    prop.status = 'Refusée';
    console.log(`❌ Proposition ${prop.id} refusée`);
  }
}
