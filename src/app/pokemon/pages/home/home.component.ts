import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {  Pokemon, PokemonId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class HomeComponent {
  
  pokemons: PokemonId[] = [];
  term: string = '';
  anError: boolean = false

  showSuggestions: boolean = false;
  pokemonFinder!: FormGroup;

  constructor( private pokemonService: PokemonService ) { 
    // this.pokemonFinder = this._builder.group({
    //   this.term['',Validators.required]
    // })
  }

  search(term: string) {
    this.anError = false
    this.term = term;
    this.showSuggestions = false;

    this.pokemonService.getPokemonsId(term)
    .subscribe({
      next: (response: any) => {
        console.log('input',response);
        this.pokemons = [];
        this.pokemons.push(response);
        console.log('search',this.pokemons);
      },
      error: () => {
        this.anError = true;
        this.pokemons = [];
        }
    });
  };

}
