import React from "react";
import { Button, Form, Segment,} from 'semantic-ui-react'

export default function CaptureForm(){
    return(
      <div>
      <Segment inverted>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Field required>
          <Form.Input fluid label='Nombre' placeholder='Nombre' />
          <Form.TextArea label='Descripción' placeholder='Descripción' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          </Form.Field>
        </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
    </div>
    );
  }