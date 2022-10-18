import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";

export default function ReportesNoAdeudo() {
  const [boleta, setBoleta] = useState(null);
  const [valid, setValid] = useState(false);

  return (
    <div className="ReportesNoAdeudo">
      <div className="search__bar">
        <Input
          name="Alumnos_beneficiados"
          type="text"
          placeholder="Boleta"
          onChange={(e) => {
            setBoleta(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            //console.log(boleta);
            setValid(true);
          }}
        >
          <Icon name="search" />
        </Button>
      </div>

      {valid && (
        <>
          <p>Generar reporte</p>
        </>
      )}
    </div>
  );
}
