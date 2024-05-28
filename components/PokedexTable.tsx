import { FC } from 'react';
import PokemonRow from './PokemonRow';


type PokemonProps = {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };

type PokedexTableProps = {
  pokemonArray: PokemonProps[];
};

const PokedexTable: FC<PokedexTableProps> = ({ pokemonArray }) => (
  <div>
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} {...pokemon} />
    ))}
  </div>
);

export default PokedexTable;
