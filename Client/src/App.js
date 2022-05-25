import './components/Sass/App.scss';
import Header from './components/RecordsTable/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyXMainPage from './components/BodyXMainPage/BodyXMainPage';
import EquipmentShop from './components/Shop/mainShop/EquipmentShop';
import Login from './components/Login/Login';
import WithoutNav from './components/Nav/withoutNav';
import WithNav from './components/Nav/withNav';
import Footer from './components/Footer/Footer';
import SupplementsShop from './components/Shop/mainShop/SupplementsShop';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/Register' element={<Register />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path='/BodyXMainPage' element={<BodyXMainPage />} />
          <Route exact path='/Header' element={<Header />} />
          <Route exact path='/EquipmentShop' element={<EquipmentShop />} />
          <Route exact path='/SupplementsShop' element={<SupplementsShop />} />
        </Route>
      </Routes>
      <Footer />
    </Router >
  )
}

export default App;
