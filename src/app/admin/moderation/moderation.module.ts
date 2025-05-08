import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModerationComponent } from './moderation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ModerationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ModerationComponent }
    ])
  ]
})
export class ModerationModule {}
