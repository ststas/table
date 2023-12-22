import './Footer.css';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GeneralContext } from '../../contexts/GeneralContext';

import { ReactComponent as Icon } from '../../assets/icons/chevron.svg';

export const Footer: FC = () => {
  const { setTestToShow } = useContext(GeneralContext);
  return (
    <header className="footer">
      <Link
        to="/"
        className="footer__link"
        onClick={() => {
          localStorage.removeItem('testToShow');
          setTestToShow(undefined);
        }}
      >
        <Icon className="footer__link-icon" />
        <p>Back</p>
      </Link>
    </header>
  );
};
