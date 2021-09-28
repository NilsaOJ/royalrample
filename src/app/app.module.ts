import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikesComponent } from './components/hikes/hikes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import { getFirestore } from "firebase/firestore";
import { DetailsHikesComponent } from './components/details-hikes/details-hikes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HikesComponent,
    DetailsHikesComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
  ],
    imports: [
        BrowserModule,
        // AgmCoreModule.forRoot({
        //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        // }),
          AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
