import { Component, Input, OnInit } from '@angular/core';

import { Pokemon, PokemonId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  @Input() pokemons: PokemonId[] = [];

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {

    this.getPokemons();

  }

  getPokemons() {
    this.pokemonService.getPokemons()
      .subscribe({
        next: (response: Pokemon) => {
          response.results.forEach((result: {name: string }) => {
            this.pokemonService.getPokemonsId(result.name)
              .subscribe({
                next: (response: any) => {
                  this.pokemons.push(response);
                  console.log(this.pokemons)
                }
              })
          })
          console.log("API", response);
        },
        error: (err) => {
          console.log(err);
        }
      })
  };

  getTypeColor(pokemon: PokemonId): string {
    return this.pokemonService.getType(pokemon);
  }

}
