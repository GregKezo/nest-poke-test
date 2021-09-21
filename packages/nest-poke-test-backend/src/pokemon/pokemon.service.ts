import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { NameAndUrl, PokemonDetails } from 'src/Types/PokeTypes';

@Injectable()
export class PokemonService {
  async getPokemon(): Promise<NameAndUrl[]> {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon').then(res => res.data)
    return pokemon;
  }

  async getPokemonById(id): Promise<PokemonDetails> {
    const thePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.data);
    return thePokemon;
  }

}
