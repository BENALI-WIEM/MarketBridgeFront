import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrandsComponent } from './public/brands/brands.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreatorsComponent } from './public/creators/creators.component';
import { NavbarBrandsComponent } from './shared/navbar-brands/navbar-brands.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AllBrandsComponent } from './public/all-brands/all-brands.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllCreatorsComponent } from './public/all-creators/all-creators.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterBrandComponent } from './auth/register-brand/register-brand.component';
import { FaqComponent } from './public/faq/faq.component';
import { ServicesBrandsComponent } from './admin/admin-brands/services-brands/services-brands.component';
import { AddServicesComponent } from './admin/admin-brands/add-services/add-services.component';
import { EditServicesComponent } from './admin/admin-brands/edit-services/edit-services.component';
import { BrandUsersComponent } from './admin/admin-brands/brand-users/brand-users.component';
import { RegisterCreatorComponent } from './auth/register-creator/register-creator.component';
import { NavbarCreatorsComponent } from './shared/navbar-creators/navbar-creators.component';
import { FormationsCreatorsComponent } from './admin-creators/formations-creators/formations-creators.component';
import { UsersCreatorsComponent } from './admin-creators/users-creators/users-creators.component';
import { AddFormationComponent } from './admin-creators/add-formation/add-formation.component';
import { AddContentComponent } from './admin/add-content/add-content.component';
import { EditContentComponent } from './admin/edit-content/edit-content.component';
import { EditFormationComponent } from './admin-creators/edit-formation/edit-formation.component';
import { BrandRequestsComponent } from './admin/brand-requests/brand-requests.component';
import { SettingsAdminComponent } from './admin/settings-admin/settings-admin.component';
import { SharedModule } from './shared/shared.module'; 
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CreatorHomeComponent } from './creators/creator-home/creator-home.component';
import { FormulaireFormationComponent } from './creators/formulaire-formation/formulaire-formation.component';
import { NavbarCreatorsAuthComponent } from './shared/navbar-creators-auth/navbar-creators-auth.component';
import { ProfilComponent } from './creators/profil/profil.component';
import { NotificationsComponent } from './creators/notifications/notifications.component';
import { NavbarBrandsAuthComponent } from './shared/navbar-brands-auth/navbar-brands-auth.component';
import { ProfilBrandsComponent } from './brands/profil-brands/profil-brands.component';
import { BrandHomeComponent } from './brands/brand-home/brand-home.component';
import { FormulaireServiceComponent } from './brands/formulaire-service/formulaire-service.component';
import { NotificationsBrandsComponent } from './brands/notifications-brands/notifications-brands.component';
import { SuiviDemandeComponent } from './brands/suivi-demande/suivi-demande.component';
import { PaymentComponent } from './brands/payment/payment.component';
import { CreateursRecommandesComponent } from './brands/createurs-recommandes/createurs-recommandes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BrandsComponent,
    FaqComponent,
    NavbarComponent,
    CreatorsComponent,
    NavbarBrandsComponent,
    RegisterBrandComponent,
    LoginComponent,
    NotfoundComponent,
    AllBrandsComponent,
    AllCreatorsComponent,
    ServicesBrandsComponent,
    AddServicesComponent,
    EditServicesComponent,
    BrandUsersComponent,
    RegisterCreatorComponent,
    NavbarCreatorsComponent,
    FormationsCreatorsComponent,
    UsersCreatorsComponent,
    AddFormationComponent,
    AddContentComponent,
    EditContentComponent,
    EditFormationComponent,
    BrandRequestsComponent,
    SettingsAdminComponent,
    ForgotPasswordComponent,
    CreatorHomeComponent,
    FormulaireFormationComponent,
    NavbarCreatorsAuthComponent,
    ProfilComponent,
    NotificationsComponent,
    NavbarBrandsAuthComponent,
    ProfilBrandsComponent,
    BrandHomeComponent,
    FormulaireServiceComponent,
    NotificationsBrandsComponent,
    SuiviDemandeComponent,
    PaymentComponent,
    CreateursRecommandesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule, 
    CommonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
