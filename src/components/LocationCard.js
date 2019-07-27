import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
export default function LocationCard ({ name, type, dimension, residents }) {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{type}</Card.Meta>
      <Card.Description>
        {dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {residents} Resident(s)
      </a>
    </Card.Content>
  </Card>
  )
}