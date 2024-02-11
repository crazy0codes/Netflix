import React from 'react';
import {Navbar} from './components/navbar';
import Login from './login';
import MovieDetails from './components/moviedetails';

function App() {
    const [loged, setLoged] = React.useState(false);
    return (
        <>
            {loged ? <Navbar /> : <Login  func = {setLoged}/>}
        </>
    )
}
export default App;