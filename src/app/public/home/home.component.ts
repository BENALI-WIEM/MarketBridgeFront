import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);  
  }
  goToallbrands(): void {
    this.router.navigate(['/all-brands']);  
  }
  goToallcreators(): void {
    this.router.navigate(['/all-creators']);  
  } 
  goToBrands(): void {
    this.router.navigate(['/brands']);  
  }
  goToCreators(): void {
    this.router.navigate(['/creators']);  
  }

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef>;

  reelsData = [
    { poster: '/assets/img/sara.png', src:'/assets/video/saratiktok.mp4', platformName: 'TikTok' },
    { poster: '/assets/img/roua.png', src: '/assets/video/rouainstagram.mp4', platformName: 'Instagram Reel' },
    { poster: '/assets/img/maram2.png', src: '/assets/video/maraminstagram.mp4', platformName: 'TikTok' },
    { poster: '/assets/img/maram1.png', src: '/assets/video/maraminsta.mp4', platformName: 'Instagram Reel' }
  ];

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.videoPlayers.forEach(video => {
      const rect = video.nativeElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!isVisible) {
        video.nativeElement.pause();
        video.nativeElement.parentElement?.classList.remove('playing');
      }
    });
  }

  togglePlay(video: HTMLVideoElement, event: Event) {
    event.stopPropagation(); // Empêche les clics de remonter à la div parent
    if (video.paused) {
      this.pauseAllVideos();
      video.play();
      video.parentElement?.classList.add('playing'); // Masquer bouton
    } else {
      video.pause();
      video.parentElement?.classList.remove('playing'); // Réafficher bouton
    }
  }

  pauseAllVideos() {
    this.videoPlayers.forEach(video => {
      video.nativeElement.pause();
      video.nativeElement.parentElement?.classList.remove('playing');
    });
  }

  services = [
    { id: 'service-1', name: 'Création du contenu', image: '/assets/img/creationdecontenu.png' },
    { id: 'service-2', name: 'Gestion des comptes', image: '/assets/img/moderation.png' },
    { id: 'service-3', name: 'Rapports d\'analyse', image: '/assets/img/rapportddanalyse.png' },
    { id: 'service-4', name: 'Sponsorisation publicitaire', image: '/assets/img/sponsoring.jpg' }
  ];

  activeService = this.services[0];

  setActiveService(service: any) {
    this.activeService = service;
  }
}

