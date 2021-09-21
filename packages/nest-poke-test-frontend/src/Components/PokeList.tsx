import React, { useState } from 'react';
import { Input } from '@mui/material';
import { NameAndUrl } from '../Types/PokeTypes';


interface PokeListProps {

}

const PokeList = (props: PokeListProps) => {
  const [fullPokeList, setFullPokeList] = useState<NameAndUrl[]>([]);
  const [filteredPokeList, setFilteredPokeList] = useState<NameAndUrl[]>([]);

  const [filterVal, setFilterVal] = useState('');
  const [displayPage, setDisplayPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<any>({});



  

  return(
    <div>
      Who's that Pokemon?
      <div>
        <Input 
          placeholder='search for pokemon'
          onChange={(e) => setFilterVal(e.target.value)}
          value={filterVal}
        />
      </div>

      <div>
        Pokemon Pagination here.
      </div>



    </div>
  )
}


export default PokeList