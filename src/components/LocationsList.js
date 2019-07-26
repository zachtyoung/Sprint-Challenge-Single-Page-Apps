import React, { useEffect, useState } from 'react';
import {SomethingElse} from "./Something"
const axios = require('axios');
let rickAndMortyLocationAPI = 'https://rickandmortyapi.com/api/location/'
export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  let [API] = useState(rickAndMortyLocationAPI)
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

  {content !== ''? <SomethingElse location={content}/>: console.log("Loading...") }


    </section>

}
