import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { setSearchField } from '../searchSlice';
import { resetLoading } from '../loadingSlice';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import ErrorBoundry from '../components/ErrorBoundry';

import './App.css'

const ROBOTS_API_URI = 'https://jsonplaceholder.typicode.com/users';

const mapStatesToProps = (state) => {
  return { 
    searchField: state.search.searchField,
    loading: state.loading.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  resetLoading: () => dispatch(resetLoading()),
});

const App = ({ searchField, onSearchChange, loading, resetLoading }) => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const getRobotsFromAPI = async () => {
      const response = await fetch(ROBOTS_API_URI);
      const robotsJson = await response.json();

      setRobots(robotsJson);
      resetLoading();
    }

    getRobotsFromAPI();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  
  return (
    <>
      <h1 className='tc f-headline mb2'>RoboFriends</h1>
      <p className='tc mb5 f3'>My First React App.</p>
      <SearchBox searchChange={onSearchChange} />

      <ErrorBoundry>
        {(() => {
          if (loading) {
            return <h2>Loading...</h2>;
          } else {
            return <CardList robots={filteredRobots} />;
          }
        })()}
      </ErrorBoundry>
    </>
  );
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
