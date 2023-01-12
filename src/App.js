import Login from './Components/Login';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import SignUp from './Components/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Info from './Components/Info';
import UserInfo from './Components/UserInfo';
import RepInfo from './Components/RepInfo';
import UserRep from './Components/UserRep';
import ProdInfo from './Components/ProdInfo';
import AddRep from './Components/AddRep';
import AddProd from './Components/AddProd';
import SingleUser from './Components/SingleUser';
import UserRepDisplay from './Components/UserRepDisplay';
import UpdateUser from './Components/UpdateUser';
import AdminProdInfo from './Components/AdminProdInfo';



function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/userInfo' element={<UserInfo/>}/>
        <Route path='/repInfo' element={<RepInfo/>}/>
        <Route path='/uRepInfo' element={<UserRep/>}/>
        <Route path='/prods' element={<ProdInfo/>}/>
        <Route path='/addRep' element={<AddRep/>}/>
        <Route path="/addProd" element={<AddProd/>}/>
        <Route path="/singleUser" element={<SingleUser/>}/>
        <Route path="/UserRep" element={<UserRepDisplay/>}/>
        <Route path="/edit" element={<UpdateUser/>}/>
        <Route path="/adminProd" element={<AdminProdInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
