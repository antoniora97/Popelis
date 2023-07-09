
import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import MovieDetails from "../pages/MovieDetails"
import GuestHome from "../pages/GuestHome"


export default function MyRoutes () {
    return (
        <Routes>
            <Route exact path="/" element={<GuestHome />} />
            <Route exact path="/home" element={<LandingPage />} />
            <Route exact path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
    )
}