import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiStatisticsComponent } from './bi-statistics.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BiStatisticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BiStatisticsComponent }
    ])
  ]
})
export class BiStatisticsModule {}
