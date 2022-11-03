export const getGifs = async (categroy) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=GPDbp33oCT11oLCQXlkuj33IX7uG9YzF&q=${categroy}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id, 
        titulo: img.title, 
        url: img.images.downsized_medium.url
    })); 
    return gifs;
}
