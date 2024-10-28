import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const display = document.getElementById("root");
const root = createRoot(display);

root.render(
  <App/>
)


