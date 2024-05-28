// import { FC, useState } from 'react';
// import { trpc } from '../utils/trpc';
// import PokemonTypeSelection from './PokemonTypeSelection';
// import PokedexTable from './PokedexTable';

// const FilterablePokedexTable: FC = () => {
//   const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

//   const pokemonQuery = trpc.getPokemonByType.useQuery(selectedType!, {
//     enabled: !!selectedType,
//   });

//   return (
//     <div>
//       <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
//       {pokemonQuery.data && <PokedexTable pokemonArray={pokemonQuery.data} />}
//     </div>
//   );
// };

// export default FilterablePokedexTable;

import { FC, useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';
import styles from './FilterablePokedexTable.module.css';

const FilterablePokedexTable: FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const pokemonQuery = trpc.getPokemonByType.useQuery(selectedType!, {
    enabled: !!selectedType,
  });

  return (
    <div className={styles.container}>
      <div className={styles.selectionable}>
        <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      </div>
      <div className={styles.tablecontainer}>
        {pokemonQuery.data && <PokedexTable pokemonArray={pokemonQuery.data} />}
      </div>
    </div>
  );
};

export default FilterablePokedexTable;
