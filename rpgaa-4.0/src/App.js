import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterCreation from './pages/CharacterCreation/CharacterCreation';
import LandingPage from './pages/LandingPage/LandingPage';
import MainMenu from './pages/MainMenu/MainMenu';
import SavedCharacters from './pages/SavedCharacters/SavedCharacters';
import PracticeRooms from './pages/PracticeRooms/PracticeMain';
import Arena from './pages/PracticeRooms/Arena';
import Tavern from './pages/PracticeRooms/Tavern';
import Library from './pages/PracticeRooms/Library';
import Gymnasium from './pages/PracticeRooms/Gymnasium';
import GadgetShop from './pages/PracticeRooms/GadgetStop';
import Tutorial from './pages/CharacterCreation/Tutorial';
import SkipTutorial from './pages/CharacterCreation/SkipTutorial';
import CharacterSheet from './pages/CharacterSheet/CharacterSheet';




function App() {
  return (
    <Router>
      <Switch>

        <div>
          <Route exact path='/' component={MainMenu}/>
          <Route exact path='/landing' component={LandingPage}/>
          <Route exact path='/creator' component={CharacterCreation}/>
          <Route exact path='/tutorial' component={Tutorial} />
          <Route exact path='/skip' component={SkipTutorial} />
          <Route exact path='/saved' component={SavedCharacters}/>
          <Route exact path='/practice' component={PracticeRooms} />
          <Route exact path='/arena' component={Arena}/>
          <Route exact path='/tavern' component={Tavern}/>
          <Route exact path='/library' component={Library} />
          <Route exact path='/gym' component={Gymnasium} />
          <Route exact path='/gadget' component={GadgetShop} />
          <Route exact path='/sheet' component={CharacterSheet} />
        </div>


      </Switch>
    </Router>
  );
}

export default App;
