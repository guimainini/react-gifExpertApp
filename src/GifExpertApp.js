import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['Dragon Ball']);
    
    /* const handleAdd = () => {
        const agregar = 'Radma 1/2';
        setcategories([...categories, agregar]);
        //setcategories( catego => [...catego, 'HunterXHunter']  );
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setcategories={ setcategories } />
            <hr />            
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key= { category }
                        category={ category } /> )
                }
            </ol>

        </>
    )
}
