import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-creators-auth',
  templateUrl: './navbar-creators-auth.component.html',
  styleUrls: ['./navbar-creators-auth.component.css']
})
export class NavbarCreatorsAuthComponent {
  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }

  goToNotifications(): void {
    this.router.navigate(['/notifications']); // à adapter selon ton routing
  }
  
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  goToProfile() {
    this.router.navigate(['/profil']);
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
  
}
