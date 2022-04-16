import './components/Sass/App.scss';
import Navigation from './components/Nav/Navigation';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompetitorsTable from './components/CompetitorsTable/CompetitorsTable';
import BodyBuildingInfo from './components/BodyBuildinginInfo/BodyBuildingInfo';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route exact path='/Header' element={<Header />} />
          <Route exact path='/' element={<BodyBuildingInfo />} />
        </Routes>
    </Router >
  )
}

export default App;
