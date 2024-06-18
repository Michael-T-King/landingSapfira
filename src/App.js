import './App.css';
import Layout from './Layout/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <>
<Routes>
<Route path={'/'} element={<Layout/>}>
<Route path={''} element={<Home/>}/>

</Route>
<Route path={'Login'} element={<Login/>}/>
<Route path={'Registration'} element={<Registration/>}/>
</Routes>
    </>
  );
}

export default App;
