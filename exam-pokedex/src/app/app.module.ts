import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonFeuComponent } from './pokemon-feu/pokemon-feu.component';
import { PokemonFoudreComponent } from './pokemon-foudre/pokemon-foudre.component';
import { PokemonPlanteComponent } from './pokemon-plante/pokemon-plante.component';
import { PokemeonFeuListComponent } from './pokemeon-feu-list/pokemeon-feu-list.component';
import { PokemeonPlanteListComponent } from './pokemeon-plante-list/pokemeon-plante-list.component';
import { PokemeonFoudreListComponent } from './pokemeon-foudre-list/pokemeon-foudre-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFeuComponent,
    PokemonFoudreComponent,
    PokemonPlanteComponent,
    PokemeonFeuListComponent,
    PokemeonPlanteListComponent,
    PokemeonFoudreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
