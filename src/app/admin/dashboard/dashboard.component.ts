import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('packChart') packChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('validationChart') validationChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('topFormationChart') topFormationChartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    Chart.register(...registerables);

    new Chart(this.packChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Basique', 'Intermédiaire', 'Premium'],
        datasets: [{
          label: 'Nombre de services commandés',
          data: [120, 95, 60],
          backgroundColor: ['#f96e0b', '#ffae00', '#ffcc70']
        }]
      },
      options: this.getChartOptions()
    });

    new Chart(this.validationChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Création & Production', 'Gestion & Analyse', 'Publicité & Monétisation'],
        datasets: [{
          label: 'Taux de validation',
          data: [91, 88, 83],
          backgroundColor: ['#f96e0b', '#d85a09', '#ffae00'] // Couleurs orange
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#fff' }
          }
        }
      }
    });

    new Chart(this.topFormationChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Pack Basique', 'Pack Intermédiaire', 'Pack Premium'],
        datasets: [{
          label: 'Taux de Réussite (%)',
          data: [89, 94, 86],
          backgroundColor: '#f96e0b'
        }]
      },
      options: this.getChartOptions()
    });
  }

  getChartOptions() {
    return {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#fff' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#fff' }
        },
        y: {
          ticks: { color: '#fff' }
        }
      }
    };
  }
}
