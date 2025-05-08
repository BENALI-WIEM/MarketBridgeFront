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
import { RegisterCreatorComponent } from './auth/register-creator/register-creator.component';
import { ModerationComponent } from './admin/moderation/moderation.component';
import { AddContentComponent } from './admin/add-content/add-content.component';
import { EditContentComponent } from './admin/edit-content/edit-content.component';
import { BrandRequestsComponent } from './admin/brand-requests/brand-requests.component';
import { SettingsAdminComponent } from './admin/settings-admin/settings-admin.component';
import { BiStatisticsComponent } from './admin/bi-statistics/bi-statistics.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ServicesBrandsComponent } from './admin/admin-brands/services-brands/services-brands.component';
import { FormationsCreatorsComponent } from './admin-creators/formations-creators/formations-creators.component';
import { AddServicesComponent } from './admin/admin-brands/add-services/add-services.component';
import { AddFormationComponent } from './admin-creators/add-formation/add-formation.component';
import { EditServicesComponent } from './admin/admin-brands/edit-services/edit-services.component';
import { EditFormationComponent } from './admin-creators/edit-formation/edit-formation.component';
import { BrandUsersComponent } from './admin/admin-brands/brand-users/brand-users.component';
import { UsersCreatorsComponent } from './admin-creators/users-creators/users-creators.component';
import { CreatorHomeComponent } from './creators/creator-home/creator-home.component';
import { FormulaireFormationComponent } from './creators/formulaire-formation/formulaire-formation.component';
import { ProfilComponent } from './creators/profil/profil.component';
import { NotificationsComponent } from './creators/notifications/notifications.component';
import { ProfilBrandsComponent } from './brands/profil-brands/profil-brands.component';
import { BrandHomeComponent } from './brands/brand-home/brand-home.component';
import { FormulaireServiceComponent } from './brands/formulaire-service/formulaire-service.component';
import { NotificationsBrandsComponent } from './brands/notifications-brands/notifications-brands.component';
import { SuiviDemandeComponent } from './brands/suivi-demande/suivi-demande.component';
import { PaymentComponent } from './brands/payment/payment.component';
import { CreateursRecommandesComponent } from './brands/createurs-recommandes/createurs-recommandes.component';

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
  { path: 'edit-services/:id', component: EditServicesComponent},
  { path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'moderation', loadChildren: () => import('./admin/moderation/moderation.module').then(m => m.ModerationModule) },
  { path: 'add-content', component: AddContentComponent},
  { path: 'edit-content/:id', component: EditContentComponent},
  { path: 'edit-formation/:id', component: EditFormationComponent},
  { path: 'brand-users', component: BrandUsersComponent},
  { path: 'users-creators', component: UsersCreatorsComponent},
  { path: 'brand-requests', component: BrandRequestsComponent},
  { path: 'settings-admin', component: SettingsAdminComponent},
  { path: 'bi-statistics', loadChildren: () => import('./admin/bi-statistics/bi-statistics.module').then(m => m.BiStatisticsModule) },
  { path: 'sidebar', component:SidebarComponent},
  { path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'creator-home',component: CreatorHomeComponent},
  { path: 'formulaire-formation', component:FormulaireFormationComponent},
  { path: 'profil', component:ProfilComponent},
  { path: 'notifications', component:NotificationsComponent},
  { path: 'profil-brands', component:ProfilBrandsComponent},
  { path: 'brand-home',component: BrandHomeComponent},
  { path: 'formulaire-service', component:FormulaireServiceComponent},
  { path: 'notifications-brands', component:NotificationsBrandsComponent},
  { path: 'suivi-demandes', component:SuiviDemandeComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'createurs-recommandes', component:CreateursRecommandesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Route par défaut
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
