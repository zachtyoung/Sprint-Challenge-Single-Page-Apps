import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
const axios = require('axios');
export default function CharacterList() {
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setContent(res.data.results)
    })
    .catch(e => {
      console.log(e)
    });
  }, []);

  return (
    <section className='character-list grid-view'>
    {content && content.map(el => <CharacterCard name= {el.name}  img={el.image} species={el.species} status={el.status} location={el.location.name} origin={el.origin.name} key={el.name}/>)}
    </section>
  );
}
