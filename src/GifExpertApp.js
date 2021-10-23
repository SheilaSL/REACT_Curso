import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    

    const[categories, setCategories]=useState(['One Punch']);
    
    /*const agregar= () => {
        setCategories([...categories, 'PowerRangers']);

        //Si quiero que se añada al principio
        //setCategories('PowerRangers', [...categories]);
    }*/

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        //No se recomienda usar el id como key
                       // return <li key={category}>{category}</li>
                       <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </div>
    )
}
