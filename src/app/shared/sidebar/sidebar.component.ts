import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeRoute: string = '';
  isDropdownOpen: boolean = false;
  pendingCount: number = 0;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
  }
  ngOnInit(): void {
    this.pendingCount = this.getPendingRequestCount();
  }
  getPendingRequestCount(): number {
    // Simulé - à remplacer par un appel API réel
    const demandes = [
      { statut: 'En attente' },
      { statut: 'Validé' },
      { statut: 'En attente' }
    ];
    return demandes.filter(d => d.statut === 'En attente').length;
  }
  
  gotoBrandRequests() {
    this.router.navigate(['/brand-requests']);
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  gotodashboard() {
    this.router.navigate(['/dashboard']);
  }

  gotoservicesbrands() {
    this.router.navigate(['/services-brands']);
  }

  gotoformationscreators() {
    this.router.navigate(['/formations-creators']);
  }

  gotousersCreateurs() {
    this.router.navigate(['/users-creators']);
    this.isDropdownOpen = false;
  }

  gotousersMarques() {
    this.router.navigate(['/brand-users']);
    this.isDropdownOpen = false;
  }
  gotoStatistics() {
    this.router.navigate(['/bi-statistics']);
  }
  
  gotomoderation() {
    this.router.navigate(['/moderation']);
    this.isDropdownOpen = false;
  }

  gotosetting(){
    this.router.navigate(['/settings-admin']);
    this.isDropdownOpen = false;
  }

  logout() {
    this.authService.logout();
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
