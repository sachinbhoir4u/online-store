import { createRoot } from 'react-dom/client'
import './index.css'
import 'typeface-roboto';
import 'typeface-playfair-display';
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
