import { Outlet } from 'react-router-dom';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}

export default Root;
