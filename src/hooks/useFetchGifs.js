import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( categroy ) => {
    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    const getImages = async() => {
        const newImages = await getGifs(categroy); 
        setImages(newImages); 
        setIsLoading(false); 
    }

    useEffect( ()=> {
        getImages();
    }, []); 
    

    return {
        images: images,
        isLoading: isLoading
    }
}