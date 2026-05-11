import 'regenerator-runtime/runtime';
import React from 'react'

import Home from './Pages/Home'
import Receta1 from './Pages/Receta1'
import Receta2 from './Pages/Receta2'
import Receta3 from './Pages/Receta3'
import Receta4 from './Pages/Receta4'
import Receta5 from './Pages/Receta5'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Router pincipal: Rutas definidas en toda la página
const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Home />
      },

      {
        path: '/papasArrugadas',
        element: <Receta1 />
      },
      
      {
        path: '/ropaVieja',
        element: <Receta2 />
      },

      {
        path: '/potajeBerros',
        element: <Receta3 />
      },

      {
        path: '/carneMechada',
        element: <Receta4 />
      },

      {
        path: '/gofioEscaldao',
        element: <Receta5 />
      },
      
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
