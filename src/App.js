import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/ProductsPages';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';


const App = () => {
    const [cart, setCart] = useState({});

    //this is for the prev cart set in localstorage after session
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
    }, []);

    ///WE ARE SETTING 'LOCALSTORAGE' SO THAT WHENEVER WE LOOK ABCK EVEN AFTER REFRESH WE CAN GET OUR LAST CART 
    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart]);
    return <>
        <Router>
            <CartContext.Provider value={{ cart, setCart }}>

                <Navigation />

                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    {/* <Route path='/about' element={<About />} ></Route> */}
                    <Route path='/products' element={<Products />} ></Route>
                    <Route path='/products/:_id' element={<SingleProduct />} ></Route>
                    <Route path='/cart' element={<Cart />} ></Route>
                </Routes>
            </CartContext.Provider>
        </Router>


    </>
};


export default App;