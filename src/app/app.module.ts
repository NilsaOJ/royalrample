import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikesComponent } from './components/hikes/hikes.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";

@NgModule({
  declarations: [
    AppComponent,
    HikesComponent,
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
