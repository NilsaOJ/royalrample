import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HikesComponent} from "./components/hikes/hikes.component";

const routes: Routes = [
  {path:'hikes', component:HikesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
