import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';

import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { PokemonTypesComponent } from './components/pokemon-types/pokemon-types.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonInfoComponent,
    PokemonInputComponent,
    PokemonCardsComponent,
    PokemonTypesComponent
  ],
  exports: [
    HomeComponent,
    PokemonInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokemonModule { }
