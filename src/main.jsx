import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Home from './components/home/home'
import Projects from './components/projects/projects'
import About from './components/about/about'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'sobre',
                element: <About />
            },
            {
                path: 'projetos',
                element: <Projects />
            },
        ]
    }

], {
    basename: import.meta.env.BASE_URL
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)