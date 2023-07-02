
import defaultImg from '../img/default.png'

export default function getMovieImg (path) {
    return path ? `https://image.tmdb.org/t/p/original${path}` : defaultImg
}