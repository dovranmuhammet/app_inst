import { render } from 'solid-js/web';
import './popup.css';

import Home from '../app/views/Home';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

render(App, document.body);
