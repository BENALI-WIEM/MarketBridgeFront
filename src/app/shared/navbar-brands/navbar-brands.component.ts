import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-brands',
  templateUrl: './navbar-brands.component.html',
  styleUrls: ['./navbar-brands.component.css']
})
export class NavbarBrandsComponent {
  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }
  
  goToRegisterBrand(): void {
    this.router.navigate(['/registerbrand']);  
  }

  goToLogin(): void {
    this.router.navigate(['/login']);  
  }

}
