import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Other, Pokemon, PokemonId, EvolutionChain, EvolutionPokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';
  private _pokemons: PokemonId[] = [];
  private _next: string = '';

  constructor( private http: HttpClient ) { }

  get pokemons(): PokemonId[] {
    return this._pokemons;
  }

  get next(): string {
    return this._next;
  }
  
  //
  getPokemons(): Observable<Pokemon[]> {
    const url = `${this.apiUrl}/pokemon/?limit=24`;
    return this.http.get<Pokemon[]>(url);
  }

  getPokemonName(name: string): Observable<PokemonId> {
    const url = `${this.apiUrl}${name}`;
    return this.http.get<PokemonId>(url);
  }

  getPokemonsId(id: string): Observable<PokemonId[]> {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<PokemonId[]>(url);
  }

  getNextPokemon(): Observable<Pokemon> {
    const url = this.next === '' ? `${this.apiUrl}?limit=24` : this.next;
    return this.http.get<Pokemon>(url);
  }

  getPokemonType(pokemon: PokemonId): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  getPokemonEvo(id: number): Observable<EvolutionPokemon> {
    const url = `${this.apiUrl}/evolution-chain/${ id }`;
    return this.http.get<EvolutionPokemon>(url);
  }

}
