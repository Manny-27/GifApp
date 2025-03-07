import { useState } from "react"

export const GitExpertApp = () => {

  const [category, setCategory] = useState(['Padre Ball','gintama'])
  
  const onAddCategory = () => {
    setCategory( [...category, "Naruto"])
  }

  return (
    <>
        {/* Titulo */}
        <h1>hola mundo</h1>

        {/* input o buscador de gif */}

        {/* Salida y Resultados */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            category.map( category => {
              return <li key={ category }>{category}</li>
            })
          }
        </ol>
    </>
  )
}
