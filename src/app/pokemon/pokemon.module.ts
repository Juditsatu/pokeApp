import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';
import { PokemonCardsComponent } from './pages/pokemon-cards/pokemon-cards.component';
import { PokemonTypesComponent } from './pages/pokemon-types/pokemon-types.component';



@NgModule({
  declarations: [
    PokemonInfoComponent,
    PokemonInputComponent,
    PokemonCardsComponent,
    PokemonTypesComponent
  ],
  exports: [
    PokemonInputComponent,
    PokemonTypesComponent,
    PokemonCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
