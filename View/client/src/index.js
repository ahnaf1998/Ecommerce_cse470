import { CookiesProvider } from "react-cookie";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const container=document.getElementById('root')
const root=ReactDOM.createRoot(container)




root.render(
  <>
    
    <BrowserRouter>
    <CookiesProvider>
    <App />
    </CookiesProvider>
    
    </BrowserRouter>
    
    
  </>
);


