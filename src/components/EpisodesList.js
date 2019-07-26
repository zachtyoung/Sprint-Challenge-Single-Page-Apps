import React, { useEffect, useState } from 'react';
import {SomethingElseElse} from "./Something"
const axios = require('axios');
let rickAndMortyEpisodeAPI = 'https://rickandmortyapi.com/api/episode/'
export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  let [API] = useState(rickAndMortyEpisodeAPI)
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

  {content !== ''? <SomethingElseElse episodes={content}/>: console.log("Loading...") }

{console.log(content)}
    </section>

}