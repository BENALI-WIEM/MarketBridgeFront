import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-bi-statistics',
  templateUrl: './bi-statistics.component.html',
  styleUrls: ['./bi-statistics.component.css']
})
export class BiStatisticsComponent implements AfterViewInit {
  selectedType: string = 'all';

  @ViewChild('packChart') packChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('validationChart') validationChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('topFormationChart') topFormationChartRef!: ElementRef<HTMLCanvasElement>;

  packChart!: Chart;
  validationChart!: Chart;
  topFormationChart!: Chart;

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.renderCharts();
  }

  renderCharts(): void {
    if (this.selectedType === 'all' || this.selectedType === 'services') {
      if (this.packChart) this.packChart.destroy();
      this.packChart = new Chart(this.packChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Basique', 'Intermédiaire', 'Premium'],
          datasets: [{
            label: 'Services commandés',
            data: [120, 95, 60],
            backgroundColor: ['#f96e0b', '#ffae00', '#ffcc70']
          }]
        },
        options: this.getChartOptions()
      });
    }

    if (this.selectedType === 'all' || this.selectedType === 'formations') {
      if (this.validationChart) this.validationChart.destroy();
      this.validationChart = new Chart(this.validationChartRef.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Création & Production', 'Gestion & Analyse', 'Publicité & Monétisation'],
          datasets: [{
            label: 'Validation (%)',
            data: [91, 88, 83],
            backgroundColor: ['#ff5722', '#ff8f00', '#ffa726']
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

      if (this.topFormationChart) this.topFormationChart.destroy();
      this.topFormationChart = new Chart(this.topFormationChartRef.nativeElement, {
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
  }

  onFilterChange(): void {
    this.renderCharts();
  }

  exportPDF(): void {
    const doc = new jsPDF();
    doc.text("Rapport Statistique BI", 10, 10);
    doc.text(`Filtre appliqué : ${this.selectedType}`, 10, 20);
    doc.save("statistiques-bi.pdf");
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
        x: { ticks: { color: '#fff' } },
        y: { ticks: { color: '#fff' } }
      }
    };
  }
}
