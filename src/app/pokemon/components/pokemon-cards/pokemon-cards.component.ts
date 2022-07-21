import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  pokemons: PokemonId[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
    // this.activateRoute.params.subscribe(
    //   params => {
    //     this.getPokemon(params['id']);
    //   })

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
  // ngOnInit(): void {

  //   this.activateRoute.params
  //     .pipe(
  //       switchMap( ()  => this.pokemonService.getAllPokemons()),
  //       tap(console.log)
  //     )
  //     .subscribe( pokemon => {
  //       this.pokemons = pokemon.results,
  //       this.pokemonSprite = pokemon.results.forEach((result: { sprite: { front_default: string; }; }) => {
  //         this.pokemonService.getPokemonsId(result.sprite.front_default),
  //         console.log(result.sprite.front_default)
  //       });
  //     })
  // }

}
