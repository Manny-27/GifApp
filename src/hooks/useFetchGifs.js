import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts"


export const useFetchGifs = (category) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async()  => {
        const newImages = await getGift( category );
        setimages(newImages);
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
  
  
    return {
        images: images,
        isLoading: isLoading
    }
}
