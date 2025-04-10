import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-creators',
  templateUrl: './navbar-creators.component.html',
  styleUrls: ['./navbar-creators.component.css']
})
export class NavbarCreatorsComponent {
  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }
  
  goToRegisterCreator(): void {
    this.router.navigate(['/registercreator']);  
  }

  goToLogin(): void {
    this.router.navigate(['/login']);  
  }

}
