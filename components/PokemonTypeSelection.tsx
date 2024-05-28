import { FC } from 'react';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => (
  <div>
    <select onChange={(e) => selectType(e.target.value)} value={selectedType}>
      <option value="">All</option>
      <option value="grass">Grass</option>
      <option value="fire">Fire</option>
      <option value="lightening">Lightening</option>
      <option value="water">Water</option>
      <option value="hypnosis">Hypnosis</option>
    </select>
  </div>
);

export default PokemonTypeSelection;
