import {useState, useEffect} from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //useEffect se usa si solo quiero que se ejecute esta funcion cuando el componente es renderizado por primera vez
    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data:imgs,
                    loading: false
                })
                
            })

    }, [category])//Si la categoria cambia, vuelve a ejecutarse esta funcion


    return state;
}