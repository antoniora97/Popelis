
import { useParams } from 'react-router-dom'
import { get } from '../data/httpClient'
import { useEffect, useState } from 'react'
import getMovieImg from '../utils/getMovieImg'

export default function MovieDetails () {

    const { movieId } = useParams()
    const [ movie, setMovie ] = useState([])
    const [ genres, setGenres ] = useState([])
    
    useEffect(() => {
        get("/movie/" + movieId + "?language=es").then((data) => {
            setMovie(data)
            setGenres(data.genres)
        })
    }, [movieId])
    
    const imageUrl = getMovieImg(movie.poster_path)

    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={imageUrl} alt={movie.title} className='object-cover w-40 h-64' />
            <p><strong>Título: {movie.title}</strong></p>
            <p>Géneros: {genres.map((genre) => genre.name).join(", ")}</p>
            <p>{movie.overview}</p>
        </div>
    )
}