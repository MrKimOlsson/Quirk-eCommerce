import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router';
import getRoutes from './routes';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {getRoutes()}
            </Routes>
        </Router>
    );
};

export default App;