import React from "react";
import { useState } from "react";
import CharacterCard from './CharacterCard'
import LocationCard from './LocationCard'
import EpisodeCard from './EpisodesCard'


export const Something = props => {

const [rickState, setRickState] = useState(props.rick)
  return (
    <>
    {
    rickState.map(rickContent => <CharacterCard name= {rickContent.name}  img={rickContent.image} species={rickContent.species} status={rickContent.status} location={rickContent.location.name} origin={rickContent.origin.name} key={rickContent.name}/>)
    }
    </>
  );
};

export const SomethingElse = props => {

  const [locationState, setLocationState] = useState(props.location)
    return (
      <>
      {
      locationState.map(locationContent => <LocationCard name= {locationContent.name} type={locationContent.type} dimension={locationContent.dimension} residents={locationContent.residents.length} key={locationContent.name} />)
      }
      </>
    );
  };

  export const SomethingElseElse = props => {

    const [episodeState, setEpisodeState] = useState(props.episodes)
      return (
        <>
        {
        episodeState.map(episodeContent => <EpisodeCard name={episodeContent.name} date={episodeContent.air_date} episode={episodeContent.episode} characters={episodeContent.characters.legth} key={episodeContent.name}/>)
        }
        </>
      );
    };