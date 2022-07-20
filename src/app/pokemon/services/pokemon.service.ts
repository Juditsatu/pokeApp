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
  
  getPokemons() {
    const url = `${this.apiUrl}/pokemon/?limit=18`;
    return this.http.get<Pokemon[]>(url);
  }

  getPokemonsId(id: string): Observable<PokemonId[]> {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<PokemonId[]>(url);
  }
}
