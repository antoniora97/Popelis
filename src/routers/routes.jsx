
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import MovieDetails from "../pages/MovieDetails"
import GuestHome from "../pages/GuestHome"


export default function MyRoutes () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<GuestHome />} />
                <Route exact path="/movies" element={<LandingPage />} />
                <Route exact path="/movie/:movieId" element={<MovieDetails />}></Route>
            </Routes>
        </Router>
    )
}