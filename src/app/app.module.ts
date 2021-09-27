import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikesComponent } from './components/hikes/hikes.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import { DetailsHikesComponent } from './components/details-hikes/details-hikes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HikesComponent,
    DetailsHikesComponent,
    NavbarComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
