export const getGifs = async( category ) => {

    const url =`https://api.giphy.com/v1/gifs/search?api_key=Pb0H6oZZMNWDWJ5xsE5Vp3JyZdEa0EZR&q=${category}&limit=15`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}

