import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemons/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path : '', children: [
    {path: '', component: PokemonsListComponent},
    {path: ':id', component: PokemonDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
