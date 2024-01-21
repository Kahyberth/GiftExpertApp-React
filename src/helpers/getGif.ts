export const getGif = async( category: string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ELROwET5BMtXGSEjjFsVCcejR0wNlYjc&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map((img: { id: string, title: string, images?: { downsized_medium: { url: string } } }) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log( gif );
    return gif;
}