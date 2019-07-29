import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodesCard';
const axios = require('axios');
export default function EpisodesList() {
  let [content, setContent] = useState(null);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      setContent(res.data.results)
    })
    .catch(e => {
      console.log(e)
    });
  }, []);
  
  return(
    <section className='character-list grid-view'>
    {content && content.map(el => <EpisodeCard name={el.name} date={el.air_date} episode={el.episode} characters={el.characters.legth} key={el.name}/>)}
    </section>
  );
}