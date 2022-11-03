import React, { useState } from 'react';
// import { AddCategory  } from './components/AddCategory';
// import { GifGird } from './components/GifGrid';
// La linea siguiente reempleza a las dos anteriors. La siguiente apunta al archivo index donde export
// todos los componentes en la carpeta 
import { AddCategory, GifGird } from './components';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = ( value ) => {
        if (categories.includes(value)) return
        setCategories([value, ...categories]);
    }

    return (<>  
        <h1>Gif Expert App</h1>
        <AddCategory  
            onNewCategory={ (value) => onAddCategory(value) }
        /> 
        { 
            categories.map( category => (
                <GifGird 
                    key={category}
                    categroy={category} />
            ))
        }
    </>)
}