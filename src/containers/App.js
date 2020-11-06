import { useState, useEffect } from 'react';

import './App.css'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import ErrorBoundry from '../components/ErrorBoundry';

const ROBOTS_API_URI = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  fetch(ROBOTS_API_URI)
    .then((response) => response.json())
    .then((robotsJSON) => {
      setRobots(robotsJSON);
      setLoading(false);
    });

  useEffect(() => {
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredRobots(filteredRobots);
  }, [searchField, robots]);

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

export default App;
