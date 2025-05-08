import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface BrandUser {
  id: number;
  brandName: string;
  email: string;
  country: string;
  phoneNumber: string;
  logoUrl: string;
  status: 'Actif' | 'Bloqué';
}

@Component({
  selector: 'app-brand-users',
  templateUrl: './brand-users.component.html',
  styleUrls: ['./brand-users.component.css']
})
export class BrandUsersComponent implements OnInit {
  users: BrandUser[] = [
    {
      id: 1,
      email: 'john.doe@example.com',
      brandName: 'Nike',
      country: 'USA',
      phoneNumber: '+1 234 567 890',
      logoUrl: 'https://via.placeholder.com/100',
      status: 'Actif'
    },
    {
      id: 2,
      email: 'alice.smith@example.com',
      brandName: 'Adidas',
      country: 'Germany',
      phoneNumber: '+49 123 456 789',
      logoUrl: 'https://via.placeholder.com/100',
      status: 'Bloqué'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  bloquerUtilisateur(user: BrandUser): void {
    user.status = 'Bloqué';
  }

  debloquerUtilisateur(user: BrandUser): void {
    user.status = 'Actif';
  }

  supprimerUtilisateur(userId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
}
