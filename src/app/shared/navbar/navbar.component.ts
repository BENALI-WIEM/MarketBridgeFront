import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router ) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }
  goToBrands(): void {
    this.router.navigate(['/brands']);  
  }

  goToFaq(): void {
    this.router.navigate(['/faq']);  
  }


goToCreators(): void {
  this.router.navigate(['/creators']);  
}

}