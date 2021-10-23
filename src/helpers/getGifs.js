//Hacer peticion de los Gifts
export const getGifs = async (category) => {

    //try{
        //encodeURI quita los espacios que pudiera haber
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zkhBfKkrTQ82DZrz4Lvfil8Ej1fRuia2`
        const resp = await fetch(url);
        //no entiendo la desestructuracion de data aquí
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                //La interrogacion significa que si vienen las imagenes lo utilice, es decir, si hay imagen
                url: img.images?.downsized_medium.url
            }
        })

       // console.log(gifs);
        return gifs;
    /*}catch(err){
        console.log(err)
    }*/
}