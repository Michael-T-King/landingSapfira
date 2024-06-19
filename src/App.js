import './App.css';
import Layout from './Layout/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AdminPanel from './pages/AdminPanel/ApminPanel'
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
<Routes>
<Route path={'/'} element={<Layout/>}>
<Route path={''} element={<Home/>}/>
<Route path={'Cart'} element={<Cart/>}/>

</Route>
<Route path={'Login'} element={<Login/>}/>
<Route path={'Registration'} element={<Registration/>}/>
<Route path={'AdminPanel'} element={<AdminPanel/>}/>

</Routes>
    </>
  );
}

export default App;
