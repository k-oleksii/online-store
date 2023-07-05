import { CSSProperties } from 'react';
import logo from './assets/logo.svg';

export const App = () => {
  const styles: CSSProperties = {
    padding: '10px 20px',
    textAlign: 'center',
    color: '#000',
    fontSize: '22px',
  };

  return (
    <div style={styles}>
      <a href='#' target='_blank'>
        <img src={logo} className='logo react' alt='React logo' />
      </a>
      <h1>Welcome to the online store CityWheel!</h1>
    </div>
  );
};
