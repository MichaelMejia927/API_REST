import Table from 'react-bootstrap/Table';
import {useEffect, useState} from 'react';

export default function Episodios() {

    const [episodios, setEpisodios] = useState([])

    const getEpisodios = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        const data = await response.json()
        setEpisodios(data.results)
    }

    useEffect(() => {
        getEpisodios()
      },[])

    return (
        <>
            <div className="pt-4">
                <h1>Lista de Episodios</h1>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Episodio</th>
                    <th>Nombre</th>
                    <th>Fecha de Lanzamiento</th>
                    </tr>
                </thead>
                <tbody>
                {episodios.map ((ep) =>( 
                    <tr>
                    <td>{ep.id}</td>
                    <td>{ep.episode}</td>
                    <td>{ep.name}</td>
                    <td>{ep.air_date}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </>
    )
}


