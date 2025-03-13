import {GiftItem} from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const  GifGrid =({category}) => {

    const { images, isLoading} = useFetchGifs( category)
    console.log({isLoading})

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2></h2>)
        }
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
