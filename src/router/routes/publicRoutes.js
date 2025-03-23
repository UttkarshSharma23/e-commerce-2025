import { lazy } from 'react';

//for lazy loading
const Register = lazy(()=> import('./../../views/auth/Register'))
const Login = lazy(() => import('./../../views/auth/Login'))


const publicRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]

export default publicRoutes