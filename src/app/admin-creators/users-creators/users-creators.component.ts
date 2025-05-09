import { Component } from '@angular/core';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  avatar: string;
  isBlocked: boolean;
  country: string; 
}

@Component({
  selector: 'app-users-creators',
  templateUrl: './users-creators.component.html',
  styleUrls: ['./users-creators.component.css']
})
export class UsersCreatorsComponent {
  users: User[] = [
    {
      id: 'u1',
      fullName: 'SARAGHRAM',
      email: 'sSARAGHRAM@example.com',
      phone: '0601234567',
      birthDate: '1995-05-10',
      avatar: '/assets/img/avatars/SARAGHRAM.png',
      isBlocked: false,
      country: 'Tunisie'
    },
    {
      id: 'u2',
      fullName: 'ROUA_WALHA',
      email: 'ROUA_WALHA@example.com',
      phone: '0612345678',
      birthDate: '1992-08-22',
      avatar: '/assets/img/avatars/ROUA_WALHA.png',
      isBlocked: true,
      country: 'Tunisie'
    },
        {
      id: 'u3',
      fullName: 'MARAM_LAHBIB	',
      email: 'MARAM_LAHBIB@example.com',
      phone: '0612345678',
      birthDate: '1993-05-22',
      avatar: '/assets/img/avatars/MARAM_LAHBIB.png',
      isBlocked: true,
      country: 'Tunisie'
    }
  ];

  blockUser(user: User) {
    user.isBlocked = true;
  }

  unblockUser(user: User) {
    user.isBlocked = false;
  }

  deleteUser(userId: string) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      this.users = this.users.filter(u => u.id !== userId);
    }
  }
}
