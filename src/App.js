import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPrdouct from './pages/AddPrdouct';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
     <Routes>
        <Route element={<PrivateComponent/>}>

        <Route path='/' element={<Products/>}></Route>
        <Route path='/add' element={<AddPrdouct/>}></Route>
        <Route path='/update/:id' element={<EditProduct/>}></Route>
        <Route path='/logout' element={<h1>logout</h1>}></Route>
        <Route path='/profile' element={<h1>profile</h1>}></Route>

        </Route>

        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
     <ToastContainer position="top-center"/>
     </BrowserRouter>
    </div>
  );
}

export default App;
