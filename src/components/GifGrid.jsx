import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifts"
import GiftItem from "./GiftItem";

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
        <div className="card-grid">
            {/* {images.map(({id, title}) => ( */}
            {images.map((img) => (
                <GiftItem 
                    key={img.id} t
                    // title={img.title}
                    // url={img.url}
                    { ...img}
                />
            ))}
        </div>
    </>
  )
}
