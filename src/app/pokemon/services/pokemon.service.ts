import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon, PokemonId } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }
  
  getAllPokemons() {
    const url = `${this.apiUrl}/pokemon/?limit=24`;
    return this.http.get<Pokemon[]>(url);
  }

  getPokemonsSprite(id: string) {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<PokemonId[]>(url);
  }

  getPokemons(id: string): Observable<PokemonId[]> {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<PokemonId[]>(url);
  }

  getPokemonCount(): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/`;
    return this.http.get<Pokemon>(url);
  }

}
