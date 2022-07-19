import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon.interface';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss'],
})
export class PokemonTypesComponent implements OnInit {

  types: string[] = [
    'ALL',
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow',
  ];

  activeType: string = '';

  pokemons: Pokemon[] = [];

  // constructor(private pokemonService: PokemonService) {}

  getClassCSS( type: string ): string {
    return (type === this.activeType ) ? 'btn btn-dark' : 'btn btn-outline-dark'
  }

  activateType( type: string ) {

    if ( type === this.activeType ) { return }

    this.activeType = type;
    // this.pokemonService.searchType( type )
    //   .subscribe( pokemons => this.pokemons = pokemons );

  }

  ngOnInit(): void {}
}
