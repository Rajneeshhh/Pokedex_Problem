import { FC, useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonRow from '../components/PokemonRow';
import styles from './styles/Part1.module.css';

const Part1: FC = () => {
  const [pokemonName, setPokemonName] = useState('');

  const { data: pokemon } = trpc.getPokemon.useQuery(pokemonName, {
    enabled: !!pokemonName,
  });

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
          className={styles.input}
        />
        {pokemon && <PokemonRow {...pokemon} />}
      </div>
      <h4 className={styles.pokemonsList}>
        Pokemons List: Bulbasaur, Charmander, Pikachu, Squirtle, Psyduck, Ivysaur, Venusaur, Raichu, Charmeleon, Charizard, Wartortle
      </h4>
    </div>
  );
};

export default Part1;
