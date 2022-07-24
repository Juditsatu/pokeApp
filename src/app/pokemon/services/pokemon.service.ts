import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon, PokemonId, EvolutionPokemon, SpeciesId } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';
  private _pokemons: any[] = [];

  get pokemons(): any[] {
    return this._pokemons;
  }

  constructor( private http: HttpClient ) { }

  getPokemons(): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/?limit=24`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonsId(id: string): Observable<PokemonId[]> {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<PokemonId[]>(url);
  }

  getType(pokemon: PokemonId): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  searchType(name: string): Observable<PokemonId[]> {
    const url = `${this.apiUrl}/types/${ name }`;
    return this.http.get<PokemonId[]>(url);
  }

  getEvolution(id: number): Observable<EvolutionPokemon[]> {
    const url = `${this.apiUrl}/evolution-chain/${ id }`;
    return this.http.get<EvolutionPokemon[]>(url);
  }

  getSpecies(id: string): Observable<SpeciesId> {
    const url = `${this.apiUrl}/pokemon-species/${ id }`;
    return this.http.get<SpeciesId>(url);
  }

}
