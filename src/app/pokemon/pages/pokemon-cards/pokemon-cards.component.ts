import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PokemonId, Result, Sprites } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnInit {

  pokemons: Result[] = [];
  pokemonSprite: Result[] = [];
  // pokemonType: Type[] = []

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
    // this.activateRoute.params.subscribe(
    //   params => {
    //     this.getPokemon(params['id']);
    //   })

    // getPokemonSprite(id: string) {
    //   this.pokemonService.getPokemonsSprite(id)
    //     .subscribe({
    //       next: (pokemon) => {
    //         console.log('sprite', pokemon)
    //         this.pokemonSprite = pokemon
    //       },
    //       error: (err) => { 
    //         console.log(err)
    //       }
    //     })
    // }
  // getPokemon() {
  //   this.pokemonService.getAllPokemons()
  //   .subscribe({
  //     next: (pokemons) => {
  //       console.log(pokemons);
  //       this.pokemons = pokemons;
  //     }
  //   })
  // }
  // getPokemon(id: string) {
  //   this.pokemonService.getPokemons(id)
  //     .subscribe({
  //       next: (pokemons) => {
  //         this.pokemons = pokemons;
  //         // this.pokemons = res;
  //         // this.pokemonSprite = this.pokemonSprite.front_default;
  //         // this.pokemonType = this.pokemonType;
  //       },
  //       error: (err) => { console.log(err) }
  //     })
  // }
  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ()  => this.pokemonService.getAllPokemons()),
        tap(console.log)
      )
      .subscribe( pokemon => {
        this.pokemons = pokemon.results,
        this.pokemonSprite = pokemon.results.forEach((result: { sprite: { front_default: string; }; }) => {
          this.pokemonService.getPokemonsSprite(result.sprite.front_default),
          console.log(result.sprite.front_default)
        });
      })
  }

}
