import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:slug', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
