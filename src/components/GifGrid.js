import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    //Desestructuro lo que recibo de useFetchGifs
    const {data, loading} = useFetchGifs(category);

    console.log(data);
    console.log(loading);

    return (
        <>
            <h3>{category}</h3>
            {loading ? <p className="animate__animated animate__flash">Loading</p> : null}
            <div className="card-grid">
                <div>
                    {
                        //Si no se ponen las llaves, es un return implicito
                        data.map(img => (
                        // <li key={img.id}>{img.title}</li>
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                  }
                </div>
            </div>
        </>
    )
}
