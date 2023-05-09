import { createContext, useReducer } from "react";
import { initialState, shopReducer } from "./ShopReducer";

export const ShopContext = createContext(initialState);
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.cart_products.concat(product);
    updatePrice(updatedCart);
   
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cart_products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cart_products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        cart_products: updatedCart,
      },
    });
  };

  const updatePrice = (cart_products) => {
    let total = 0;
    cart_products.forEach((product) => (total += product.price*product.quantity));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total:total
      }
    });
  };
  
  ;

  const value = {
    total: state.total,
    cart_products: state.cart_products,
    addToCart,
    removeFromCart
  };


return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;

};
