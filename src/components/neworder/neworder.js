import React, { Component } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Menu from '../menu/menu';

class Neworder extends Component {
  constructor(props){
    super(props);
    this.state = {
      factura: [
        {
          id: 1,
          vendedor: 'Andres',
          fecha: Date.now(),
          mesa:1,
          pedido:[
          {
            num_item:0,
            nombre_item:'Promo 6',
            cantidad:1,
            precio:15.00,
            total:0
          },
          ],
          codigo_promo:'',
          subtotal:0,
          iva:0.12,
          total:0
        },
      ]
    }
  }
  
  render() {
    const footer =  <span>
                      <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
                    </span>;

    return (
        <div className="grid">
          <div className="col-8">
            <Menu />
          </div>
          <div className="col-4">
            <Card title="New Order" subTitle="Ver todas las ordenes" footer={footer}>
            nombreProducto
              <Button label="+"/> Número <Button label="-"/>
            </Card>
          </div>
        </div>
    );
  }
}

export default Neworder;
