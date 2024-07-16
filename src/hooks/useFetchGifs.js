
import{useState,useEffect} from 'react';
//import { getImages } from '../helpers/getImages';
import { getImages } from '../helpers/getImages';

// Custom Hooks

 const useFetchGifs = (category)=> {
    const[images, setimages] = useState([]);


    useEffect(()=>{
        getImages(category,setimages);    
    },[]);

    return {
        images:images,
        isLoading:false,
    }
}

export default useFetchGifs; 
