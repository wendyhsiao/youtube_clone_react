import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Root from './ui/Root';
import Error from './ui/Error';
import Home from './pages/Home';
import Results from './pages/Results';
import Watch from './pages/Watch';

import { GlobalStyle } from './styles/GlobalStyles';

const queryClient = new QueryClient();

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
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
