import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemons/pokemon-details/pokemon-details.component';
import { PokemonsSearchComponent } from './components/pokemons/pokemons-search/pokemons-search.component';
import { PokemonsPaginationComponent } from './components/pokemons/pokemons-pagination/pokemons-pagination.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonDetailsComponent,
    PokemonsSearchComponent,
    PokemonsPaginationComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient( withFetch()) // => Utilisation du module http client
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
