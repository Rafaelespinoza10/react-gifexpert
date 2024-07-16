
import{useState,useEffect} from 'react';
//import { getImages } from '../helpers/getImages';
import { getImages } from '../helpers/getImages';

// Custom Hooks

 const useFetchGifs = (category)=> {
    const[images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        getImages(category,setimages,setisLoading);    
    },[]);

    return {
        images,
        isLoading,
    }
}

export default useFetchGifs; 
