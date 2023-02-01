import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
     <Routes>
        <Route element={<PrivateComponent/>}>

        <Route path='/' element={<h1>Product list</h1>}></Route>
        <Route path='/add' element={<h1>Product Add</h1>}></Route>
        <Route path='/update' element={<h1>Product update</h1>}></Route>
        <Route path='/logout' element={<h1>logout</h1>}></Route>
        <Route path='/profile' element={<h1>profile</h1>}></Route>

        </Route>

        <Route path='/register' element={<SignUp/>}></Route>
     </Routes>
     <Footer/>
     <ToastContainer position="top-center"/>
     </BrowserRouter>
    </div>
  );
}

export default App;
