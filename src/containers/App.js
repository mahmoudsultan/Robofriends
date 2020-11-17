import { useEffect } from 'react';

import { connect } from 'react-redux';
import { setSearchField } from '../searchSlice';
import { requestRobot } from '../robotSlice';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import ErrorBoundry from '../components/ErrorBoundry';

import './App.css'

const mapStatesToProps = (state) => {
  return { 
    searchField: state.search.searchField,
    loading: state.loading.loading,
    robots: state.robotsRepo.robots,
    error: state.robotsRepo.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  requestRobots: () => dispatch(requestRobot()),
});

const App = ({ searchField, onSearchChange, loading, robots, error, requestRobots }) => {
  useEffect(() => {
    requestRobots();
  }, [requestRobots]);

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
          } else if (error) {
            return <p>{error}</p>
          } else {
            return <CardList robots={filteredRobots} />;
          }
        })()}
      </ErrorBoundry>
    </>
  );
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
