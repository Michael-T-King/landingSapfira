import './App.css';
import Layout from './Layout/Layout';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AdminPanel from './pages/AdminPanel/ApminPanel';
import Cart from './pages/Cart/Cart';
import SuccessOrder from './pages/Cart/SuccessOrder/SuccessOrder';
import OneProduct from './pages//OneProduct/OneProduct'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SuccessEdit from './pages/AdminPanel/EditProduct/SuccessEdit/SuccessEdit';
import SuccessAdd from './pages/AdminPanel/AddProduct/SuccessAdd/SuccessAdd';
import Chart from './pages/AdminPanel/Graphs/Graphs'

function App() {
  const location = useLocation();

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            <Route path={'/'} element={<Layout />}>
              <Route path={''} element={<Home />} />
              <Route path={'Cart'} element={<Cart />} />
              <Route path="/oneproduct/:id" element={<OneProduct />} />
            </Route>
            <Route path={'Login'} element={<Login />} />
            <Route path={'Registration'} element={<Registration />} />
            <Route path={'AdminPanel'} element={<AdminPanel />} />
            
            <Route path={'Success'} element={<SuccessOrder/>} />
            <Route path={'SuccessEdit'} element={<SuccessEdit/>} />
            <Route path={'SuccessAdd'} element={<SuccessAdd/>} />
            <Route path={'chart'} element={<Chart/>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
