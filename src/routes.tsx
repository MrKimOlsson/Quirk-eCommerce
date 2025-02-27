import { Route } from 'react-router';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import Layout from './components/Layout';
import { Profile } from './pages/Profile';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/profile', element: <Profile /> },
    { path: '/cart', element: <Cart /> },
];

const getRoutes = () => {
    return routes.map((route, index) => (
        <Route 
            key={index} 
            path={route.path} 
            element={<Layout>{route.element}</Layout>} 
        />
    ));
}

export default getRoutes;