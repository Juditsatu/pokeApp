import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { concat, Subscription } from 'rxjs';

import { Pokemon, PokemonId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  @Input() pokemons: PokemonId[] = [];
  term: string = '';
  anError: boolean = false
  
  loading: boolean = false;
  subscriptions: Subscription[] = [];
  
  pokemonSuggested: PokemonId[] = [];
  showSuggestions: boolean = false;

  constructor( 
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  search(term: string) {
    this.anError = false
    this.term = term;
    this.showSuggestions = false;

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
      },
      error: () => {
        this.anError = true;
        this.pokemons = [];
        }
    });
  };

  suggestions(term: string) {
    this.anError = false
    this.term = term;
    this.showSuggestions = false;

    this.pokemonService.getPokemonsId(term)
    .subscribe({
      next: (pokemons) => {this.pokemonSuggested = pokemons},
      error: () => {this.pokemonSuggested = []}
    })
  }

  searchSuggested(term: string) {
    this.search(term);
  }

  ngOnInit(): void {
    if (!this.pokemons.length) {
      this.loadMore();
    }
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  loadMore(): void {
    this.loading = true;
    this.subscription = this.pokemonService.getNextPokemon()
      .subscribe({
        next:  (response: Pokemon) => {
          // this.pokemonService.next = response.next;
          const details = response.results.map((i: any) => this.pokemonService.getPokemonName(i.name));
          this.subscription = concat(...details)
            .subscribe({
              next: (response: any) => {
                this.pokemonService.pokemons.push(response);
              }
            })
        },
        error: (err) => {
          console.log('Error', err), () => this.loading = false;
        }
      })
  }

}
