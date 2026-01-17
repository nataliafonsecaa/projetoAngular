import { Component } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d";


@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, NgForOf],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
 public pokemons: Pokemon[] = [
   {
    image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png',
    number: 1,
    name:'Bulbasaur',
    types: [
      Type.Grass,
      Type.Poison
    ]
   }
 ];
}

interface Pokemon{ 
  image: string;
  number: number;
  name: string;
  types: Type[];
}

enum Type {
  Grass = 'Grass',
  Poison =  'Poison'
}
