import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
export default function CharacterCard ({img, name, species, status, location, origin}) {
  return (
    <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{species} {status}</Card.Meta>
      <Card.Description>
        Location: {location}<br></br>
        Origin: {origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
  )
}
