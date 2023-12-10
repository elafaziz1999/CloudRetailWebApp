
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ARView from './Components/ARView/ARView';
import FAQ from './Pages/FAQ';
import AccountInformation from './Pages/AccountInformation';
import Success from './Pages/Success';
import Checkout from './Pages/Checkout';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/phones' element={<ShopCategory category="phones"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/ar-view' element={<ARView />}/>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/faq-page' element={<FAQ/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/my-account" element={<AccountInformation/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
