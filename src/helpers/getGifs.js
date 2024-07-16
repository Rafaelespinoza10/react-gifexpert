export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=REoKy3egpoiu52WcFnc2CZAnH1y4rDS5&q=${category}&limit=20`;
    const response = await fetch(url);
    console.log(response);      
    const {data} = await response.json();
    console.log(data); 

    const gifs = data.map(img=>({
        id:img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }));

    return gifs; 
}

