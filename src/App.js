import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Errror';
import Mynav from './components/Mynav';
import './App.css';
import {Routes , Route } from  "react-router-dom" ;
function App() {
  return (
   <>
<Mynav/>
   <Routes>
    <Route path='/' extract={false} element={<Home/>}/>
    <Route path='/login' extract={false} element={<Login/>}/>
    <Route path='*' extract={false} element={<Error/>}/>
   </Routes>


   </>
  );
}

export default App;
