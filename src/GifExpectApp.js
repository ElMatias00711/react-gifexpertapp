
//Codigo 1

// Con el sniper rafc crea toda esta estructura

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpectApp = () => {

    // const categorias = ['One Punch', 'Samuray X', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategorias( ['HunterXHunter' , ...categorias] );

    //     console.log(categorias);
    // }

    return (
        <>
            <h2>GifExpectApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />
            
            <ol>
                {
                    categorias.map( (categoria,  i ) => (
                        <GifGrid 
                            key={ categoria } 
                            category={ categoria } 
                        />
                    ))
                }
            </ol>

        </>
    )
}