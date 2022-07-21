import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pokemon/pages/home/home.component';
import { PokemonInfoComponent } from './pokemon/pages/pokemon-info/pokemon-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'pokemon/:id',
    component: PokemonInfoComponent
  },
  {
    path: '**',
    redirectTo:  ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
