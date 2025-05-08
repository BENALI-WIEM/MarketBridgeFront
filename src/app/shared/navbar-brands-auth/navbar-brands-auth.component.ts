import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-brands-auth',
  templateUrl: './navbar-brands-auth.component.html',
  styleUrls: ['./navbar-brands-auth.component.css']
})
export class NavbarBrandsAuthComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToNotifications(): void {
    this.router.navigate(['/notifications-brands']);
  }

  goToOrdersTracking(): void {
    this.router.navigate(['/suivi-demandes']);
  }

  goToRecommendedCreators(): void {
    this.router.navigate(['/createurs-recommandes']);
  }

  goToProfile(): void {
    this.router.navigate(['/profil-brands']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
