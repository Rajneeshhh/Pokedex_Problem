import { FC, useState } from 'react';
import PokedexTable from '../components/PokedexTable';
import { trpc } from '../utils/trpc';
import styles from './styles/Part2.module.css';

const ITEMS_PER_PAGE = 2;

const Part2: FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const { data: pokemonArray, isLoading } = trpc.getPokemonArray.useQuery(
    { names: pokemonNames, page, limit: ITEMS_PER_PAGE },
    { enabled: pokemonNames.length > 0 }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonNames(e.target.value.split(',').map((name) => name.trim()));
    setPage(1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (pokemonArray && pokemonArray.length === ITEMS_PER_PAGE) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Pokémon names, separated by commas"
          className={styles.input}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemonArray && <PokedexTable pokemonArray={pokemonArray} />
        )}
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={page === 1} className={styles.button}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={!pokemonArray || pokemonArray.length < ITEMS_PER_PAGE}
            className={styles.button}
          >
            Next
          </button>
        </div>
      </div>
      <h4 className={styles.pokemonsList}>
        Pokemons List: Bulbasaur, Charmander, Pikachu, Squirtle, Psyduck, Ivysaur, Venusaur, Raichu, Charmeleon, Charizard, Wartortle
      </h4>
    </div>
  );
};

export default Part2;
