import React, { useState, useEffect } from 'react';
import { GifGridItem } from '../components/GifGridItem' ;
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGird = ({ categroy }) => {

    const { images, isLoading } = useFetchGifs( categroy ); 

    return ( 
        <>
            <h3>Categoria { categroy } </h3>
            {
                isLoading && <h2>Cargando....</h2>
            }

            <div className="card-grid">
            { 
                images.map( ( image ) => (
                    <GifGridItem 
                        key={ image.id }
                        { ...image }
                    />
                ))            
                // images.map( image => (
                //     <li key={ image.id }> { image.titulo } </li>
                // ))
            }
            </div>
        </>
    )
}
