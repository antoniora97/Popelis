import { useEffect, useState } from "react";
import { get } from "../data/httpClient"
import MovieCard from "./MovieCard";

export default function ContextMovieCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie?language=es").then((data) => {
            setMovies(data.results)
        });
    }, [])

    return (
        <div className="flex">
            { movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />)) }
        </div>
    )
}
