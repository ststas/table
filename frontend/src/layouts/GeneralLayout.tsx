import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components';
import './GeneralLayout.css';

export const GeneralLayout = () => {
  const location = useLocation();

  return (
    <section className="general-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      {location.pathname !== '/' && <Footer />}
    </section>
  );
};
