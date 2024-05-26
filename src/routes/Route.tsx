import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/cadastro'
import Login from '../pages/login/login'
import { Home } from '../pages/home/Home'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/cadastro" Component={Cadastro} />
                <Route path="/" Component={Home} />
            </Routes>
            
        </BrowserRouter>
    )
}
