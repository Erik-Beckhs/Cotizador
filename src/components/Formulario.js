import React, { Fragment, useState } from 'react';

function Formulario({cantidad, obtieneCantidad, plazo, obtienePlazo}){

    const [error, obtieneError] = useState(false);

    const cargaDatos = (e)=>{
        e.preventDefault();
        if(cantidad === 0 || plazo === ''){
            obtieneError(true);
        }
        //console.log(cantidad, plazo);
    }
    return (
        <Fragment>
          
            <form onSubmit={cargaDatos}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = {(e)=>{
                        obtieneCantidad(e.target.value);
                    }}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select onChange={(e)=>{
                      obtienePlazo(e.target.value)
                  }}
                      className="u-full-width"
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
    </form>
        </Fragment>
    );
}
export default Formulario;