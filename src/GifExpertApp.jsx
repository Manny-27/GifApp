import { useState } from "react"
import {AddCategory, GifGrid} from './components'
// import AddCategory from "./components/AddCategory"
// import GifGrid from "./components/GifGrid"

export const GitExpertApp = () => {

  const [category, setCategory] = useState(['Gintama'])
  
  const onAddCategory = (newCategory) => {
    if ( category.includes(newCategory) ) return;

    // console.log(newCategory)
    setCategory( [newCategory, ...category]);
    
  }

  return (
    <>
        <h1>Gifs App</h1>

        {/* input o buscador de gif */}
          <AddCategory 
          onNewCategory={onAddCategory}
          // setCategory={ setCategory} 
          
          />
          {
            category.map( category => {
              return (
                <GifGrid key={category} category={category}/>
              )
            })
          }
    </>
  )
}
