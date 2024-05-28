import { FC } from 'react';

type PokemonProps = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

const PokemonRow: FC<PokemonProps> = ({ id, name, types, sprite }) => (
  <div>
    <img src={sprite} alt={name} />
    <span>{id}</span>
    <span>{name}</span>
    <span>{types.join(', ')}</span>
  </div>
);

export default PokemonRow;
