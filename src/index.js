import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/index';

import App from './app.js';
import SettingsContext from './context/settings.js';
// import LoginContext from './components/auth/context.js';

const store = createStore();


class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SettingsContext>
          <App />
        </SettingsContext>
      </Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
