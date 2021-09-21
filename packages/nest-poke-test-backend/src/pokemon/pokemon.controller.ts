import { Controller, Get, HttpStatus, Param, Res, ValidationPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  
  @Get('/:id')
  async getPokemonById(@Res() res, @Param('id') id) {
    const thisPokemon = await this.pokemonService.getPokemonById(id);
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(HttpStatus.OK).json(thisPokemon);
  }

  @Get('/')
  async getPokemon(@Res() res) {
    const pokemon = await this.pokemonService.getPokemon();
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(HttpStatus.OK).json(pokemon);
  }
}