import { Route, Routes } from "react-router-dom";
import { Layout, Home, Products, Product, Cart, Error } from "./index";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const cartRef = useRef([]);




   useEffect(() => {
     const savedCart = JSON.parse(localStorage.getItem("cart"));
     if (savedCart && Array.isArray(savedCart)) {
       setCart(savedCart); 
       cartRef.current = savedCart; 
     }
   }, []);
  
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      cartRef.current = cart;
    }
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      updatedCart.push({ ...product, count: 1 });
    }

    setCart(updatedCart); 
  };


    const handleChangeQuantity = (productId, newQuantity) => {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? { ...item, count: newQuantity, cardPrice: item.price * newQuantity }
          : item
      );
      setCart(updatedCart); 
      cartRef.current = updatedCart; 
    };
  
    const handleRemoveItem = (itemId) => {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart); 
      cartRef.current = updatedCart; 
    };



  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  , []);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout cart={cart} />}>
            <Route index element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} addToCart={addToCart} />}
            />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart cart={cart} handleChangeQuantity={handleChangeQuantity} handleRemoveItem={handleRemoveItem } />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
