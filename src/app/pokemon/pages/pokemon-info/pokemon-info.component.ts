import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { EvolutionDetail, PokemonId, Chain, EvolutionPokemon, Species } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  pokemon!: PokemonId;
  pokemonEvo!: EvolutionDetail;

  currentSpecies!: Species;
  evolutionChain!: any;
  evoChainClean: any[] = []
  

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
        switchMap( ({ id }) => this.pokemonService.getPokemonEvo( id )),
        tap(console.log)
      )
      .subscribe( pokemonEvo => this.pokemonEvo.trigger.name = pokemonEvo )
    
       
  }

//   ngOnInit(): void {
//     this.subscription = this.route.params.subscribe(params => {

//         if (this.pokemonService.pokemons.length) {
//             this.pokemon = this.pokemonService.pokemons.find(i => i.name === params.name);
//             if (this.pokemon) {
//                 this.getEvolution();
// 		  return;
//             }
//         }

//         this.subscription = this.pokemonService.get(params.name).subscribe(response => {
//             this.pokemon = response;
//             this.getEvolution();
//         }, error => console.log('Error Occurred:', error));
//     });
// }

//   getEvolution() {
//     if (!this.pokemon.evolutions || !this.pokemon.evolutions.length) {
//         this.pokemon.evolutions = [];
//         this.subscription = this.pokemonService.getSpecies(this.pokemon.name)
//             .subscribe(response => {
//                 const id = this.getId(response.evolution_chain.url);
//                 this.subscription = this.pokemonService.getEvolution(id)
//                     .subscribe(response => this.getEvolves(response.chain));
//             });
//     }
// }
  // getEvolutionChainInfo(url: string) {
  //   this.pokemonService.getPokemonEvo(url).subscribe((resultObject) => {
  //     var evoData = resultObject.chain;
  //     do {
  //       var evoDetails = evoData['evolution_details'][0];

  //       this.evoChainClean.push({
  //         species_name: evoData.species.name,
  //         min_level: !evoDetails ? 1 : evoDetails.min_level,
  //         trigger_name: !evoDetails ? null : evoDetails.trigger.name,
  //         item: !evoDetails ? null : evoDetails.item,
  //       });
  //       evoData = evoData['evolves_to'][0];
  //     } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  //     console.log(this.evoChainClean, 'clean Evo Chain');
  //     this.evolutionChain = resultObject;
  //     console.log('???',resultObject)
  //   });
  // }
  // .subscribe({
  //   next: (response: any) => {
  //     response.results.forEach((result: { name: string; }) => {
  //       this.pokemonService.getPokemonEvo(result)
  //         .subscribe({
  //           next: (response: any) => {
  //             this.pokemonEvo.evolution_details.push(response);
  //             console.log(this.pokemonEvo)
  //           }
  //         })
  //     })
  //   }
  // })
  // ngOnInit(): void {
  //   this.pokemonService.getPokemons()
  //     .subscribe({
  //       next: (response: any) => {
  //         response.results.forEach((result: { name: string; }) => {
  //           this.pokemonService.getPokemonsId(result.name)
  //             .subscribe({
  //               next: (response: any) => {
  //                 this.pokemons.push(response);
  //                 console.log(this.pokemons)
  //               }
  //             })
  //         })
  //       }
  //     })
  // }
  // let evoChain = [];
  // let evoData = chain.chain;

  // do {
  //   let numberOfEvolutions = evoData['evolves_to'].length;  

  //   evoChain.push({
  //     "species_name": evoData .species.name,
  //     "min_level": !evoData ? 1 : evoData .min_level,
  //     "trigger_name": !evoData ? null : evoData .trigger.name,
  //     "item": !evoData ? null : evoData .item
  //   });

  //   if(numberOfEvolutions > 1) {
  //     for (let i = 1;i < numberOfEvolutions; i++) { 
  //       evoChain.push({
  //         "species_name": evoData.evolves_to[i].species.name,
  //         "min_level": !evoData.evolves_to[i]? 1 : evoData.evolves_to[i].min_level,
  //         "trigger_name": !evoData.evolves_to[i]? null : evoData.evolves_to[i].trigger.name,
  //         "item": !evoData.evolves_to[i]? null : evoData.evolves_to[i].item
  //     });
  //     }
  //   }        

  //   evoData = evoData['evolves_to'][0];

  // } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

  // return evoChain;
  
}
