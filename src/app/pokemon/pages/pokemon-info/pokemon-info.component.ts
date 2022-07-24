import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Chain, EvolutionDetail, EvolutionPokemon, PokemonId, SpeciesId } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styles: [
    `
    .card {
      cursor: pointer;
    }
    `
  ]
})
export class PokemonInfoComponent implements OnInit {

  pokemons: PokemonId[] = [];
  evolutionId: number = 0;

  pokemonEvolution: {
    name: string,
    id: number
  }[] = [];

  pokemonsSpecie!: SpeciesId;
  pokemon!: PokemonId;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }


  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.pokemonService.getPokemonsId( id )),
        tap(console.log)
      )
      .subscribe( pokemon => this.pokemon = pokemon )

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.pokemonService.getSpecies( id )),
        tap(console.log)
      )
      .subscribe( specie => this.pokemonsSpecie = specie )

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.pokemonService.getSpecies( id )),
        tap(console.log)
      )
      .subscribe({
        next: (evolution) => {
          this.evolutionId = evolution.evolution_chain.url.split('/').at(-2)
          this.pokemonService.getEvolution(this.evolutionId)
            .subscribe({
              next: (data: any) => {

                this.getEvolution(data)

                console.log('evo info',data)
                console.log('evolutions',this.pokemonEvolution)
              }
            })
        },
        error: (err) => {
          console.log(err);
        }
      })

  }

  getEvolution(data: any) {

    this.pokemonEvolution = [];

    this.pokemonEvolution.push({
      name: data.chain.species.name,
      id: data.chain.species.url.split('/').at(-2)
    })

    //Gets first evolution/s
    if (data.chain.evolves_to.length) {
      for(let i = 0; i < data.chain.evolves_to.length; i++) {
        this.pokemonEvolution.push({
          name: data.chain.evolves_to[i].species.name,
          id: data.chain.evolves_to[i].species.url.split('/').at(-2)
        })
      }
    }

    //Gets the 3rd Evolution in case it exists
    if (data.chain.evolves_to[0].evolves_to.length) {
      this.pokemonEvolution.push({
        name: data.chain.evolves_to[0].evolves_to[0].species.name,
        id: data.chain.evolves_to[0].evolves_to[0].species.url.split('/').at(-2)
      })
    }
  }

  getTypeColor(pokemon: PokemonId): string {
    return this.pokemonService.getType(pokemon);
  }

}
