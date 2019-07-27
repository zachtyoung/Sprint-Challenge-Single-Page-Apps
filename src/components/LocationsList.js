import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
const axios = require('axios');
export default function LocationsList() {
  let [content, setContent] = useState(null);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      setContent(res.data.results)
    })
    .catch(e => {
      console.log(e)
    });
  }, []);

  return (
    <section className='character-list grid-view'>
    {content && content.map(el => <LocationCard name= {el.name} type={el.type} dimension={el.dimension} residents={el.residents.length} key={el.name} />)}
    </section>
  );
}
