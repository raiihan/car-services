import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/SignUpIn/Login/Login';
import Register from './Pages/SignUpIn/Register/Register';
import RequireAuth from './Pages/SignUpIn/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:seviceId' element={<ServiceDetails />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/checkout' element={<RequireAuth>
          <Checkout />
        </RequireAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
