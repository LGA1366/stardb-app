import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Starships from "./Pages/Starships";
import Planets from "./Pages/Planets";
import MilleniumFalconPage from "./Pages/MilleniumFalconPage";
import DeathStarPage from "./Pages/DeathStarPage";
import ImperialShipPage from "./Pages/ImperialShipPage";

const App = () => {
    return (
        <div>
           <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/starships/falcon" element={<MilleniumFalconPage />} />
                <Route path="/starships/deathstar" element={<DeathStarPage />} />
                <Route path="/starships/imperial" element={<ImperialShipPage />} />
            </Routes>
        </div>

    );
};

export default App;