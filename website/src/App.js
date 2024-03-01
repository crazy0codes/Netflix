import React from 'react';
import { Navbar } from './components/navbar';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import Homepage from './pages/homepage'
import MovieDetails from "./components/moviedetails"
import Login, {action as actionLoader}  from './login';

const text = { color: "black" }

function TVShows() {
    return (
        <div>
            <h1 style={text} >TV Shows</h1>
        </div>
    )
}

function Movies() {
    return (
        <div>
            <MovieDetails />
        </div>
    )
}

function RecentlyAdded() {
    return (
        <div>
            <h1 style={text} >Recently Added</h1>
        </div>
    )
}

function MyList() {
    return (
        <div>
            <h1 style={text} >My List</h1>
        </div>
    )
}


const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Navbar/>}>
        <Route element = {<Homepage props={text}/>} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recentlyadded" element={<RecentlyAdded />} />
        <Route path="/mylist" element={<MyList />} />

        <Route
        path='/login'
        element = {<Login/>}
        action={actionLoader}
        />
        </Route>
))


export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}