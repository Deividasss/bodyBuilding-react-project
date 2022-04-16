import './components/Sass/App.scss';
import Navigation from './components/Nav/Navigation';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompetitorsTable from './components/CompetitorsTable/CompetitorsTable';
import BodyBuildingInfo from './components/BodyBuildinginInfo/BodyBuildingInfo';

function App() {
  return (
    <Router>
      <div className='pagrindinis'>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/BodyBuildingInfo' element={<BodyBuildingInfo />} />
        </Routes>
      </div >
    </Router >
  )
}

export default App;
