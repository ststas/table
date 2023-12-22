import './Header.css';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Header: FC = () => {
  const location = useLocation();

  const titleText: string =
    location.pathname === '/'
      ? 'Dashboard'
      : location.pathname.includes('/finalize')
        ? 'Finalize'
        : 'Results';

  const subTitleText: string =
    location.pathname === '/finalize'
      ? 'Spring promotion'
      : 'Order basket redesing';
  return (
    <header className="header">
      <h1 className="header__title">{titleText}</h1>
      {location.pathname !== '/' && (
        <h2 className="header__subtitle">{subTitleText}</h2>
      )}
    </header>
  );
};
