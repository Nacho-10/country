import './App.css';

import { Route, Switch } from 'react-router-dom';

import { ActivitiesFormPage } from './pages/activitiesForm/ActivitiesFormPage';
import { CountryDetailPage } from './pages/countryDetail/CountryDetailPage';
import { HomePage } from './pages/home/HomePage';
import { LandingPage } from './pages/landing/LandingPage';
import { getCountries } from './store/slices/countries/thunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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