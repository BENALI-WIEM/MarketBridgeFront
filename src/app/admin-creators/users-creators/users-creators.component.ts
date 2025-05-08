import { Component } from '@angular/core';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  avatar: string;
  isBlocked: boolean;
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
      fullName: 'Sarah Dupont',
      email: 'sarah@example.com',
      phone: '0601234567',
      birthDate: '1995-05-10',
      avatar: '/assets/img/avatars/sarah.png',
      isBlocked: false
    },
    {
      id: 'u2',
      fullName: 'Marc Ben Ayed',
      email: 'marc@example.com',
      phone: '0612345678',
      birthDate: '1992-08-22',
      avatar: '/assets/img/avatars/marc.png',
      isBlocked: true
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
