import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "styled-components";
import "./app.css";
import LazyContainer from "./Components/lazyContainer/LazyContainer";
import { Contactus } from "./Containers/contactus/contactus";
import { ShopProvider } from './ContextApi/ShopContext';
import { GlobalStyle } from "./Themes/globalStyle.styled";
import { DarkTheme, LightTheme } from "./Themes/theme.jsx";
const AboutusPage=lazy(()=>import ("./Pages/aboutuspage/aboutuspage"));
const CartPage=lazy(()=>import ("./Pages/cartpage/cartpage"));
const HomePage=lazy(()=>import ("./Pages/homepage/homepage"));
const Productlist=lazy(()=>import ("./Pages/productList/productlist"));
const Productpage=lazy(()=>import ("./Pages/productpage/productpage"));
const Signin=lazy(()=>import ("./Pages/signin/sigin"));
const Signup=lazy(()=>import ("./Pages/signup/signup"));

function App() {
  const [themeMode, setTheme] = useState("dark");
  
  const themeToggler = () => {
    themeMode === "light" ? setTheme("dark") : setTheme("light");
  };

 

  return (
    <div className="App">
      <ShopProvider>
      <ThemeProvider theme={themeMode === "light" ? LightTheme : DarkTheme}>
        <GlobalStyle />
        
        <ToastContainer/>
        <Suspense fallback={<LazyContainer/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/*" element={<Productlist />} />

          <Route path="/product/:id" element={<Productpage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/login"
            element={<Signin />}
          />
          <Route path="/register" element={<Signup />} />

          
          <Route path="/aboutus" element={<AboutusPage />} />
        </Routes>
        </Suspense>
        <Contactus/>
      </ThemeProvider>
      </ShopProvider>
    </div>
  );
}

export default App;
