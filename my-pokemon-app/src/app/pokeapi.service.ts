import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/';
  private pokemonCount = 1008; // number of Pokemon in the API

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<any> {
    const pokemonIndex = Math.floor(Math.random() * this.pokemonCount) + 1;
    const pokemonUrl = `${this.pokemonUrl}pokemon/${pokemonIndex}/`;

    return this.http.get(pokemonUrl).pipe(
      map((response: any) => {
        const pokemon = {
          id: response.id,
          name: response.name,
          weight: response.weight,
          height: response.height,
          image: response.sprites.front_default,
          stats: response.stats,
          abilities: response.abilities,
          types: response.types,
          moves: response.moves
        };
        return pokemon;
        
      })
    );
    
  }
  getMove(moveName: string) {
    return this.http.get(`${this.pokemonUrl}move/${moveName}/`);
}

}
