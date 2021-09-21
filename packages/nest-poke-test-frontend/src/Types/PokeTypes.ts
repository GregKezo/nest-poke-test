export interface NameAndUrl {
  name: string;
  url: string;
}

interface Sprite {
  back_default: string | null; 
  back_female: string | null; 
  back_shiny: string | null; 
  back_shiny_female: string | null; 
  front_default: string | null; 
  front_female: string | null; 
  front_shiny: string | null; 
  front_shiny_female: string | null; 
}

interface GameIndices {
  game_index: number;
  version: NameAndUrl;
}

export interface PokemonDetails {
  abilities: NameAndUrl[];
  base_experience: number;
  forms: NameAndUrl[];
  game_indices: GameIndices[]; // have to do some logic to determine generation
  height: number;
  held_items: any[];
  moves: NameAndUrl[];
  name: string;
  order: number;
  past_types: any[];
  species: NameAndUrl;
  sprites: Sprite; //front_default is the image url we want
  stats: any[];
  types: any[];
  weight: number;

}