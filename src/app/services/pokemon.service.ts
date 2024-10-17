import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {PokemonsData, PokemonsDetails} from '../models/pokemon.model'


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public BASE_URL = "https://pokeapi.co/api/v2/pokemon"
  private _apiUrl : string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"

  constructor(private _httpClient : HttpClient) { }

  getPokemons = (url : string | null = "") : Observable<PokemonsData> => {
    let queryURL : string = url ? url : this._apiUrl
    return this._httpClient.get<PokemonsData>(queryURL)
  }

  getPokemonDetails = (url : string) : Observable<PokemonsDetails> => {
    return this._httpClient.get<PokemonsDetails>(`${url}`)
  }
}
