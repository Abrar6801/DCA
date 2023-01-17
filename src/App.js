
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AdminLogin from './Components/Admin/AdminLogin';
import Info from './Components/User/Info';
import UserInfo from './Components/User/UserInfo';
import RepInfo from './Components/Representative/RepInfo';
import UserRep from './Components/User/UserRep';
import ProdInfo from './Components/Product/ProdInfo';
import AddRep from './Components/Representative/AddRep';
import AddProd from './Components/Product/AddProd';
import SingleUser from './Components/User/SingleUser';
import UserRepDisplay from './Components/User/UserRepDisplay';
import UpdateUser from './Components/User/UpdateUser';
import AdminProdInfo from './Components/Admin/AdminProdInfo';

import BlockedUserInfo from './Components/User/BlockedUserInfo';





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
        <Route path="/blockedUsers" element={<BlockedUserInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
