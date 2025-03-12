import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GitExpertApp = () => {

  const [category, setCategory] = useState(['Padre Ball'])
  
  const onAddCategory = (newCategory) => {
    if ( category.includes(newCategory) ) return;

    // console.log(newCategory)
    setCategory( [newCategory, ...category]);
    
  }

  return (
    <>
        {/* Titulo */}
        <h1>hola mundo</h1>

        {/* input o buscador de gif */}
          <AddCategory 
          onNewCategory={onAddCategory}
          // setCategory={ setCategory} 
          
          />
        <button onClick={onAddCategory}>Agregar</button>
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
