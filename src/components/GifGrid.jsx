import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifts"

export default function GifGrid({category}){

    const [images, setimages] = useState([]);

    const getImages = async()  => {
        const newImages = await getGift( category );
        setimages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <>
        <h3>{category}</h3>
        <ol>
            {images.map(({id, title}) => (
                <li key={id}>{title}</li>
            ))}
        </ol>
    </>
  )
}
