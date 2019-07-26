import React from "react";
import { useState } from "react";
import CharacterCard from './CharacterCard'


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