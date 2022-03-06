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
    const footer =  <div>
                      <Button label="Pagar factura" icon="pi pi-check" className="p-button-rounded p-button-warning col-12"/>
                    </div>;

    const head =  <div>
                  <Button label="Borrar todo" icon="pi pi-trash" className="p-button-rounded p-button-danger col"/>
                  </div>;

    return (
        <div className="grid">
          <div className="col-8">
            <Menu />
          </div>
          <div className="col-4">
            <Card title="Nueva Orden" subTitle="Ver todas las ordenes" footer={footer}>
            
            <div className="grid">
              <div className="col">nombreProducto</div>
              <div className="col">
                <Button className="p-button-sm" label="-"/> 10 <Button className="p-button-sm" label="+"/>
              </div>
              <div className="col">$ 13.50</div>
            </div>

            <div className="grid">
              <div className="col">nombreProducto</div>
              <div className="col">
                <Button className="p-button-sm" label="-"/> 10 <Button className="p-button-sm" label="+"/>
              </div>
              <div className="col">$ 13.50</div>
            </div>

            <div className="grid">
              <div className="col">nombreProducto</div>
              <div className="col">
                <Button className="p-button-sm" label="-"/> 10 <Button className="p-button-sm" label="+"/>
              </div>
              <div className="col">$ 13.50</div>
            </div>
            
            <Card>
              <div>
                <h3>
                  Subtotal
                </h3>
              </div>
              <div>
                <h3>
                IVA
                </h3>
              </div>
              <div>
                <h2>
                TOTAL
                </h2>
              </div>
            </Card>

            {head}
            </Card>
          </div>
        </div>
    );
  }
}

export default Neworder;
