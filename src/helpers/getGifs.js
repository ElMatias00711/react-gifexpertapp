


    export const getGifs = async( category ) => {

        const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=qJkbiXHtYrcOrTGQgMzUaTuOw5SazCfu`;
        const resp = fetch(url);

        const { data } = await (await resp).json();
    
        // el signo de interrogación es en caso de que vengan las imagenes las utilice
        // url: img.images?.downsized_medium.url
    
        const gifs = data.map( img =>{
            return {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
    
        return gifs;
  

    }