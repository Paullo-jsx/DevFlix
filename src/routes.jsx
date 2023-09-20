import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from '../src/pages/Home/index.jsx'
import Favoritos from '../src/pages/Favoritos/index.jsx'
import Pesquisar from '../src/pages/Pesquisar/index.jsx'
import Page404 from '../src/pages/Page404/index.jsx'

export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/favoritos' element={<Favoritos />}></Route>
                <Route path='/pesquisar' element={<Pesquisar />}></Route>
                <Route path='*' element={<Page404 />}></Route>
            </Routes>
        </HashRouter>
    )
}