import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ActivitiesFormPage } from './pages/activitiesForm/ActivitiesFormPage';
import { CountryDetailPage } from './pages/countryDetail/CountryDetailPage';
import { HomePage } from './pages/home/HomePage';
import { LandingPage } from './pages/landing/LandingPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/country/:id'>
          <CountryDetailPage />
        </Route>

        <Route path='/activities'>
          <ActivitiesFormPage />
        </Route>
        
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
