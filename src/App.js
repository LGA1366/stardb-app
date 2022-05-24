import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Starships from "./Pages/Starships";
import Planets from "./Pages/Planets";

const App = () => {
    return (
        <div>
           <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/planets" element={<Planets />} />
            </Routes>
        </div>

    );
};

export default App;