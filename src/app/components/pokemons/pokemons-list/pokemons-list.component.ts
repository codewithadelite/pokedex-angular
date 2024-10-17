import { Component } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from 'rxjs';

import {Pokemon, PokemonsData, PokemonsDetails } from '../../../models/pokemon.model';

interface PokemonWithImage extends Pokemon{
  image? : string
}

type Display = "grid" | "list"

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss'
})
export class PokemonsListComponent {
  display : Display = "grid"
  pokemons! : PokemonsData

  constructor(private _pokemonService : PokemonService) {
    this.getPokemons()
  }

  getPokemons(url : string | null = "") : void {
    this._pokemonService.getPokemons(url).subscribe({
      next : (data) => {
        this.pokemons = data;
        for (let pokemon of this.pokemons.results){
          this.getPokemonDetails(pokemon.url).subscribe(
            {
              next : (data) => {
                let image : string | undefined = data.sprites.other.home.front_default
                pokemon.image = image
              }
            }
          )
          
        }
        console.log(data)
      },
      error : (error) => {
        console.log(error)
      }
    })
  }

  getPokemonDetails = (url : string) : Observable<PokemonsDetails> => {
    return this._pokemonService.getPokemonDetails(url)
  }

  changeDisplay(option : Display) : void{
    this.display = option
  }

  getPokemonId(url: string): number | null {
    // Match the number between the last two slashes, including a trailing slash
    const match = url.match(/\/(\d+)\/$/);
    
    // If a match is found, return it as a number, otherwise return null
    return match ? parseInt(match[1], 10) : null;
  }

}
