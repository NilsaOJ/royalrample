import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHikesComponent } from './components/details-hikes/details-hikes.component';
import {HikesComponent} from "./components/hikes/hikes.component";

const routes: Routes = [
  {path:'hikes', component:HikesComponent},
  {path:'details/:id', component:DetailsHikesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
