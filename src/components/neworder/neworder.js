import React, { Component } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Menu from '../menu/menu';

class Neworder extends Component {
  render() {
    const footer = <span>
    <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
</span>;

    return (
        <div className="grid">
        <Card>
          <menu></menu>
        </Card>
          <Card title="New Order" subTitle="Ver todas las ordenes" footer={footer}>
          </Card>
        </div>
    );
  }
}

export default Neworder;
