import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHikesComponent } from './components/details-hikes/details-hikes.component';
import {HikesComponent} from "./components/hikes/hikes.component";
import {HomeComponent} from "./components/home/home.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'hikes', component:HikesComponent},
  {path:'details/:id', component:DetailsHikesComponent},
  {path:'home', component: HomeComponent},
  {path:'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
