import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
export default function EpisodeCard ({name, date, episode, characters}) {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
      <Card.Description>
        {episode}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {characters} Characters
      </a>
    </Card.Content>
  </Card>
  )
}

