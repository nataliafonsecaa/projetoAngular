import { Component, signal } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonCard } from './pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [ PokemonList, PokemonCard], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto1');
}
