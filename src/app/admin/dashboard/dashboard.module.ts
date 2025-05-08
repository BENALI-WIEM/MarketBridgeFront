import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'; // ⬅️

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule, // ⬅️ sidebar accessible ici
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ]
})
export class DashboardModule {}
