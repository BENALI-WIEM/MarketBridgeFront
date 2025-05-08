// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component'; // assure-toi que le chemin est correct
import { FormsModule } from '@angular/forms';
import { NavbarCreatorsAuthComponent } from './navbar-creators-auth/navbar-creators-auth.component';
import { NavbarBrandsAuthComponent } from './navbar-brands-auth/navbar-brands-auth.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FormsModule],
  exports: [SidebarComponent, CommonModule, FormsModule]
})
export class SharedModule {}
