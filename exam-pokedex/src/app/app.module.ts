import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonFeuComponent } from './pokemon-feu/pokemon-feu.component';
import { PokemonFoudreComponent } from './pokemon-foudre/pokemon-foudre.component';
import { PokemonPlanteComponent } from './pokemon-plante/pokemon-plante.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFeuComponent,
    PokemonFoudreComponent,
    PokemonPlanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
