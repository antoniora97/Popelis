
import { Link } from 'react-router-dom'
import getMovieImg from '../utils/getMovieImg'

export default function MovieCard ({ movie }) {

    const imageUrl = getMovieImg(movie.poster_path)
    
    return (
        <div>
            <Link to={"/movie/" + movie.id}>
                <img src={imageUrl} width={150} height={75} alt={movie.title} />
            </Link>
        </div>
    )
}
