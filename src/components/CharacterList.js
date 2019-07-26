import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import {Something} from "./Something"
const axios = require('axios');
let rickAndMortyAPI = 'https://rickandmortyapi.com/api/character/'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [API] = useState(rickAndMortyAPI)
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(API)
    .then(res => {
      setContent(res.data.results)
      
    })
    .catch(e => {
      console.log(e)
    });
  }, [API]);

  return <section className='character-list grid-view'>
<div>
  {content !== ''? <Something rick={content}/>: console.log("Loading...") }
</div>
{console.log(content)}
    </section>

}
