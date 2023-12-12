import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyle } from './styles/GlobalStyles';
import Root from './ui/Root';
import Error from './ui/Error';
import Home from './pages/Home';
import Results from './pages/Results';
import Watch from './pages/Watch';

// day.js 組件
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.locale('zh-tw');
dayjs.extend(relativeTime);

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
