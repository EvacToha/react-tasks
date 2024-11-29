import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import CountersPage from "../pages/CountersPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/counters" element={<CountersPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>

}

export default App;