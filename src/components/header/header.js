import React, { Component } from "react";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


const Header = () => {

  const items = [
    {
        label: 'Ordenes',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Nueva Orden',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    },

                ]
            }
        ]
    }
  ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;
    return (
      <div className="header">
        <Menubar model={items} start={start} end={end}/>
      </div>
      );
    }

export default Header;