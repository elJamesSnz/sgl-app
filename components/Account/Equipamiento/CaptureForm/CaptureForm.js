import React from "react";
import { Button, Form, Segment,Dropdown,Input} from 'semantic-ui-react'

export default function CaptureForm(){
    const options = [
      { key: 'Funcional', text: 'Funcional', value: 'Funcional' },
      { key: 'No Funcional', text: 'No Funcional', value: 'No Funcional' },
    ]
    return(
      <div>
      <Segment inverted>
      
    </Segment>
    </div>
    );
  }

  function FormCapturaEquipos(props){
    return (
      <>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Field required>
          <Form.Input fluid label='Nombre' placeholder='Nombre' />
          <Form.TextArea label='Descripción' placeholder='Descripción' />
          <Form.Input fluid label='Código de barras' placeholder='Código de barras' />
          <Form.Input fluid label='Modelo' placeholder='Modelo'/>
          <Form.Input fluid label='Año' placeholder='Año'/>
          <Form.Input fluid label='Manual de Usuario' placeholder='Año'/>
          <Input
            label={<Dropdown defaultValue='Funcional' options={options} />}
            labelPosition='right'
            placeholder='Find domain'
          />
          //Condicional If No Funcional
          <Form.Input fluid label='Descripcion Fallo' placeholder='Descripcion Fallo'/>

          </Form.Field>
        </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
      </Form>
      </>
    );
  }


