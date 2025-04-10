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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegisterBrandComponent } from './auth/register-brand/register-brand.component';
import { FaqComponent } from './public/faq/faq.component';
import { ServicesBrandsComponent } from './brands/services-brands/services-brands.component';
import { AddServicesComponent } from './brands/add-services/add-services.component';
import { EditServicesComponent } from './brands/edit-services/edit-services.component';
import { BrandUsersComponent } from './brands/brand-users/brand-users.component';
import { RegisterCreatorComponent } from './auth/register-creator/register-creator.component';
import { NavbarCreatorsComponent } from './shared/navbar-creators/navbar-creators.component';
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
    DashboardComponent,
    SidebarComponent,
    ServicesBrandsComponent,
    AddServicesComponent,
    EditServicesComponent,
    BrandUsersComponent,
    RegisterCreatorComponent,
    NavbarCreatorsComponent,
    FormationsCreatorsComponent,
    UsersCreatorsComponent,
    ModerationComponent,
    AddFormationComponent,
    AddContentComponent,
    EditContentComponent,
    EditFormationComponent,
    BrandRequestsComponent,
    SettingsAdminComponent,
    BiStatisticsComponent,
 
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
