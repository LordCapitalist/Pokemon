import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';


class RandomGender {
  gender: string;
  constructor() {
    this.gender = Math.random() < 0.5 ? 'male' : 'female';
  }
}

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent {
  pokemon: any = {};
  showStats = false;
  moves: any[] = [];
  
  

  constructor(private pokeapiService: PokeapiService) { }

  getRandomPokemon(): void {
    const gender = new RandomGender().gender;
    this.pokeapiService.getRandomPokemon().subscribe(pokemon => {
      this.pokemon = pokemon;
      this.pokemon.gender = new RandomGender().gender;
      this.showStats = false;
      this.moves = [];
      this.getMoves();
      
      
      
      
    });
    
  }
  showPokemonStats(): void {
    this.showStats = true;
  }
  getMoves(): void {
    const moves = this.pokemon.moves.slice(0, 4);
    for (const move of moves) {
      this.pokeapiService.getMove(move.move.name).subscribe(moveData => {
        this.moves.push(moveData);
      });
}
  }
}

