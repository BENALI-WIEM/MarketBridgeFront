import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { BrandsComponent } from './public/brands/brands.component';
import { CreatorsComponent } from './public/creators/creators.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AllBrandsComponent } from './public/all-brands/all-brands.component';
import { AllCreatorsComponent } from './public/all-creators/all-creators.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterBrandComponent } from './auth/register-brand/register-brand.component';
import { FaqComponent } from './public/faq/faq.component';
import { ServicesBrandsComponent } from './brands/services-brands/services-brands.component';
import { AddServicesComponent } from './brands/add-services/add-services.component';
import { EditServicesComponent } from './brands/edit-services/edit-services.component';
import { BrandUsersComponent } from './brands/brand-users/brand-users.component';
import { RegisterCreatorComponent } from './auth/register-creator/register-creator.component';
import { FormationsCreatorsComponent } from './creators/formations-creators/formations-creators.component';
import { UsersCreatorsComponent } from './creators/users-creators/users-creators.component';
import { ModerationComponent } from './admin/moderation/moderation.component';
import { AddFormationComponent } from './creators/add-formation/add-formation.component';
import { AddContentComponent } from './admin/add-content/add-content.component';
import { EditContentComponent } from './admin/edit-content/edit-content.component';
import { EditFormationComponent } from './creators/edit-formation/edit-formation.component';
import { BrandRequestsComponent } from './admin/brand-requests/brand-requests.component';
import { SettingsAdminComponent } from './admin/settings-admin/settings-admin.component';
import { BiStatisticsComponent } from './admin/bi-statistics/bi-statistics.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent}, 
  { path: 'brands', component: BrandsComponent},  
  { path: 'creators', component: CreatorsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'registerbrand', component: RegisterBrandComponent},
  { path: 'registercreator', component: RegisterCreatorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'all-brands', component: AllBrandsComponent},
  { path: 'all-creators', component: AllCreatorsComponent},
  { path: 'services-brands', component: ServicesBrandsComponent},
  { path: 'formations-creators', component: FormationsCreatorsComponent},
  { path: 'add-services', component: AddServicesComponent},
  { path: 'add-formation', component: AddFormationComponent},
  { path: 'edit-services/:id', component: EditServicesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'moderation', component: ModerationComponent },
  { path: 'add-content', component: AddContentComponent},
  { path: 'edit-content/:id', component: EditContentComponent},
  { path: 'edit-formation/:id', component: EditFormationComponent},
  { path: 'brand-users', component: BrandUsersComponent},
  { path: 'users-creators', component: UsersCreatorsComponent},
  { path: 'brand-requests', component: BrandRequestsComponent},
  { path: 'settings-admin', component: SettingsAdminComponent},
  { path: 'bi-statistics', component: BiStatisticsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Route par défaut
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
