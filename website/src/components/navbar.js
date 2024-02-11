import React from "react"
import {Link, Route, Routes} from "react-router-dom"
import './Navbar.css'
import MovieDetails from "./moviedetails"
const text = {color : "black"}

function TVShows() {
    return(
        <div>
            <h1 style={text} >TV Shows</h1>
        </div>
    )
}

function Movies() { 
    return(
        <div>
            <MovieDetails/>
        </div>
    )
}

function RecentlyAdded() {
    return(
        <div>
            <h1 style={text} >Recently Added</h1>
        </div>
    )
}

function MyList() {
    return(
        <div>
            <h1 style={text} >My List</h1>
        </div>
    )
}

function Homepage() {
    return(
        <div>
            <h1 style={text} >Homepage</h1>
        </div>
    )
}

export function Navbar() { 
    return(
       <>
       <header className="navbar-header">
           <Link to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="navbar-logo" /></Link>
            <nav className='navbar'>
              <ul className='navbar-ul'>
                <li className='navbar-list-item'><Link to="/tvshows">TV shows</Link></li>
                <li className='navbar-list-item'><Link to="/movies">Movies</Link></li>
                <li className='navbar-list-item'><Link to="/recentlyadded">Recently Added</Link></li>
                <li className='navbar-list-item'><Link to="/mylist">My List</Link></li>
              </ul>
            </nav>
       </header>
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recentlyadded" element={<RecentlyAdded />} />
        <Route path="/mylist" element={<MyList />} />
       </Routes>
       </> 
    )
}