import { Component, Input, OnInit } from '@angular/core';

import { PokemonId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  @Input() pokemons: PokemonId[] = [];
  term: string = '';
  anError: boolean = false

  pokemonSuggested: PokemonId[] = [];
  showSuggestions: boolean = false;


  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe({
        next: (response: any) => {
          response.results.forEach((result: { name: string; }) => {
            this.pokemonService.getPokemonsId(result.name)
              .subscribe({
                next: (response: any) => {
                  this.pokemons.push(response);
                  console.log(this.pokemons)
                }
              })
          })
        }
      })
  }

  // search(term: string) {
  //   this.anError = false
  //   this.term = term;
  //   this.showSuggestions = false;

  //   this.pokemonService.getPokemonsId(term)
  //     .subscribe({
  //       next: (pokemon) => {
  //         console.log(pokemon);
  //         this.pokemons = pokemon;
  //       },
  //       error: () => {
  //         this.anError = true;
  //         this.pokemons = [];
  //       }
  //     });
  // };
  // search(term: string) {
  //   this.anError = false
  //   this.term = term;
  //   this.showSuggestions = false;

  //   this.pokemonService.getPokemons()
  //   .subscribe({
  //     next: (response: any) => {
  //       response.results.forEach((result: { name: string; }) => {
  //         this.pokemonService.getPokemonsId(result.name)
  //           .subscribe({
  //             next: (response: any) => {
  //               this.pokemons.push(response);
  //               console.log(this.pokemons)
  //             }
  //           })
  //       })
  //     },
  //     error: () => {
  //       this.anError = true;
  //       this.pokemons = [];
  //       }
  //   });
  // };

  // suggestions(term: string) {
  //   this.anError = false
  //   this.term = term;
  //   this.showSuggestions = false;

  //   this.pokemonService.getPokemonsId(term)
  //   .subscribe({
  //     next: (pokemons) => {this.pokemonSuggested = pokemons},
  //     error: () => {this.pokemonSuggested = []}
  //   })
  // }

  // searchSuggested(term: string) {
  //   this.search(term);
  // }
  // // this.pokemonService.getPokemons()
  // //     .subscribe({
  // //       next: (response: any) => {
  // //         response.results.forEach((result: { name: string; }) => {
  // //           this.pokemonService.getPokemonsId(result.name)
  // //             .subscribe({
  // //               next: (response: any) => {
  // //                 this.pokemons.push(response);
  // //                 console.log(this.pokemons)
  // //               }
  // //             })
  // //         })
  // //       },
  // //       error: () => {
  // //         this.anError = true;
  // //         this.pokemons = [];
  // //       }
  // //     });

  getTypeColor(pokemon: PokemonId): string {
    return this.pokemonService.getPokemonType(pokemon);
  }

}
