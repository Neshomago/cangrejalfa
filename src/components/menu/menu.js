import React, { Component } from "react";
import { Card } from 'primereact/card';

class Menu extends Component {
  render() {
    const platos = [
      {id: 1, nombre: 'Promo 6', precio: '15.00', cantidad:1, tipo:'Cangrejos', image_url:'../assets/criollos.jpg'},
      {id: 2, nombre: 'Encocados', precio: '16.00', cantidad:1, tipo:'Cangrejos',image_url:'./assets/encocadoscangrejo.jpg'},
      {id: 3, nombre: 'Al Ajillo', precio: '17.00', cantidad:1, tipo:'Cangrejos'},
      {id: 4, nombre: 'Ensalada', precio: '12.00', cantidad:1, tipo:'Cangrejos'},
      {id: 5, nombre: 'Penalti', precio: '7.00', cantidad:1, tipo:'Cangrejos'},
      {id: 6, nombre: 'Ceviche', precio: '15.00', cantidad:1, tipo:'Camaron'},
      {id: 7, nombre: 'Encocado', precio: '16.00', cantidad:1, tipo:'Camaron'},
      {id: 8, nombre: 'Al Ajillo', precio: '17.00', cantidad:1, tipo:'Camaron'},
      {id: 9, nombre: 'Filete Apanado', precio: '12.00', cantidad:1, tipo:'Pescado'},
      {id: 10, nombre: 'Ceviche', precio: '7.00', cantidad:1, tipo:'Pescado'},
      {id: 11, nombre: 'Corvina Apanada', precio: '7.00', cantidad:1, tipo:'Pescado'},
      {id: 12, nombre: 'Guatita', precio: '7.00', cantidad:1, tipo:'Varios'},
      {id: 13, nombre: 'Maduro', precio: '7.00', cantidad:1, tipo:'Varios'},
      {id: 14, nombre: 'Cocolón', precio: '7.00', cantidad:1, tipo:'Varios'},
      {id: 15, nombre: 'Salsa Criolla', precio: '7.00', cantidad:1, tipo:'Varios'},
    ]

    return (

      <div>
        <div className="grid">
          <div className="col-12">
            <h1>Menu</h1>
          </div>
            {platos.map(plato => (
            <div className="col-2">
              <Card title={plato.nombre} subTitle={plato.tipo} className="cursor-pointer shadow-5" onClick={this.addItem}>
                <img src={plato.image_url} alt="Card image" />
                <p>Precio: {plato.precio}</p>
                <p>Cantidad: {plato.cantidad}</p>
              </Card>
            </div>
            ))
            }
          </div>
      </div>
    )
  }
}

export default Menu;
