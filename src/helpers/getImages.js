import { getGifs } from "./getGifs";

export const getImages = async(category,setimages)=>{
    const newImages = await getGifs(category);
    setimages(newImages);
}