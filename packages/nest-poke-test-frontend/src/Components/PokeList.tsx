import React, { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import { NameAndUrl } from '../Types/PokeTypes';
import axios from 'axios';


interface PokeListProps {

}

const PokeList = (props: PokeListProps) => {
  const [fullPokeList, setFullPokeList] = useState<NameAndUrl[]>([]);
  const [filteredPokeList, setFilteredPokeList] = useState<NameAndUrl[]>([]);

  const [filterVal, setFilterVal] = useState('');
  const [displayPage, setDisplayPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<any>({});


  useEffect(() => {
    axios.get('http://localhost:3005/pokemon').then(res => {
      console.log(res);
    })
  }, [])


  

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