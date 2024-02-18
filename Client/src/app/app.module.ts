import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/product/product.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { EasyBannerComponent } from './components/easy-banner/easy-banner.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AccountComponent,
    ContactComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    ProductComponent,
    EasyBannerComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CardModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
