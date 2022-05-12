import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  const addToCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
      setReloadKey(Math.random());
    }
    setCart(newCart);
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar cart={cart} key={reloadKey} />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
