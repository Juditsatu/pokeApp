import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PokemonNumber, Result, Sprites, Type } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent {

  pokemons: Result[] = [];
  // pokemonSprite!: Sprites;
  // pokemonType: Type[] = []

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
    // this.activateRoute.params.subscribe(
    //   params => {
    //     this.getPokemon(params['id']);
    //   })

  // getPokemon(id: string) {
  //   this.pokemonService.getPokemons(id)
  //     .subscribe({
  //       next: (pokemons) => {
  //         this.pokemons = pokemons.name;
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
        switchMap( ({ id })  => this.pokemonService.getPokemons( id )),
        tap(console.log)
      )
      .subscribe( pokemon => this.pokemons = pokemon )
  }

}
