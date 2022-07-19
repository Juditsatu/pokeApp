import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';



@NgModule({
  declarations: [
    PokemonInfoComponent,
    PokemonInputComponent
  ],
  exports: [
    PokemonInfoComponent,
    PokemonInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
