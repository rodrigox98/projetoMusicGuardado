import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastraUsuario2 from '../cadastraUsuario2/CadastraUsuario2';

function AppRoutes() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CadastraUsuario2 />} />
        </Routes>
    </BrowserRouter>
)
}
export default AppRoutes;