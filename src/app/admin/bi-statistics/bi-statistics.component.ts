import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bi-statistics',
  templateUrl: './bi-statistics.component.html',
  styleUrls: ['./bi-statistics.component.css']
})
export class BiStatisticsComponent implements AfterViewInit {
  @ViewChild('packChart') packChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('validationChart') validationChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('topFormationChart') topFormationChartRef!: ElementRef<HTMLCanvasElement>;

  selectedType: string = 'all';

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.renderCharts();
  }

  onFilterChange(): void {
    // Optionnel : tu peux rerender les graphiques ici si nécessaire
  }

  renderCharts(): void {
    if (this.packChartRef) {
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
    }

    if (this.validationChartRef) {
      new Chart(this.validationChartRef.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Création & Production', 'Gestion & Analyse', 'Publicité & Monétisation'],
          datasets: [{
            label: 'Taux de validation',
            data: [91, 88, 83],
            backgroundColor: ['#f96e0b', '#d85a09', '#ffae00']
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
    }

    if (this.topFormationChartRef) {
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

  exportPDF(): void {
    const element = document.querySelector('.charts-section') as HTMLElement;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
      pdf.save('statistiques.pdf');
    });
  }
}
