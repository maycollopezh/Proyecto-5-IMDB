import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RouterIndex from './router/RouterIndex';
import Footer from './components/Footer';
import Filtrado from './components/Filtrado'; 
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Filtrado /> 
                <RouterIndex />
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
