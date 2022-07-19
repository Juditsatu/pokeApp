import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon, PokemonNumber } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }
  
  getPokemons(index: string): Observable<PokemonNumber> {
    const url = `${this.apiUrl}/pokemon/${ index }`;
    return this.http.get<PokemonNumber>(url);
  }

  getPokemonCount(): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/`;
    return this.http.get<Pokemon>(url);
  }

}
