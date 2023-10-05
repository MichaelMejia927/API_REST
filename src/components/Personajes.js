import Cards from "../layouts/cards"
import {useEffect, useState} from 'react';

export default function Personajes() {

    const [personajes, setPersonajes] = useState([])

    const getPersonajes = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setPersonajes(data.results)
    }

    useEffect(() => {
        getPersonajes()
      },[])

    return (
        <>
            <div className="pt-4">
                <h1>Lista de Personajes</h1>
            </div>

            {personajes.map ((personaje) =>( 
                <Cards title={personaje.name} image={personaje.image} content={"Origen: "+personaje.origin.name}/>
            ))}

        </>
    )
}


