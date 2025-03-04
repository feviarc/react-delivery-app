import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const htmlDivElement = document.getElementById('root');
const root = createRoot(htmlDivElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
