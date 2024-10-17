import { Component } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';

import {Pokemon, PokemonsData, PokemonsDetails } from '../../../models/pokemon.model';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {

  pokemonId! : number
  pokemon! : PokemonsDetails 

  constructor(private _pokemonService : PokemonService, private _ar : ActivatedRoute) {
    this.pokemonId = this._ar.snapshot.params["id"]
  }

  ngOnInit() : void{
    this.getPokemonDetails(this._pokemonService.BASE_URL + '/' + this.pokemonId).subscribe({
      next : data => {
        this.pokemon = data 
      },
    })
    
  }

  getPokemonDetails = (url : string) : Observable<PokemonsDetails> => {
    return this._pokemonService.getPokemonDetails(url)
  }



  
}
