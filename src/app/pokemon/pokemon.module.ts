import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { PokemonTypesComponent } from './components/pokemon-types/pokemon-types.component';
import { HomeComponent } from './pages/home/home.component';



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
    PokemonInputComponent,
    PokemonTypesComponent,
    PokemonCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
