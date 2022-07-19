import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/';

  constructor( private http: HttpClient ) { }

  getPokemon(id: string): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${ id }`;
    return this.http.get<Pokemon>(url)
  }

}
