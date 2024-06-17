import './App.css';
import Layout from './Layout/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'

function App() {
  return (
    <>
<Routes>
<Route path={'/'} element={<Layout/>}>
<Route path={''} element={<Home/>}/>


</Route>
</Routes>
    </>
  );
}

export default App;
