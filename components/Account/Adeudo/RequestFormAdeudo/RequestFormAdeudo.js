import React from 'react'
import { Button, Segment, Divider, Input,Dimmer, Loader, Image} from 'semantic-ui-react'

export default function RequestForm() {
  return (
    <div>
      <Segment>
        Mostrar informacion
        <Dimmer active>
        <Loader size='mini'>Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  )
}
