import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './ui/Root';
import Error from './ui/Error';
import Home from './pages/Home';
import Results from './pages/Results';
import Watch from './pages/Watch';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/results', element: <Results /> },
      { path: '/watch', element: <Watch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
