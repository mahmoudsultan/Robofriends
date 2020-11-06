import { useState, useEffect } from 'react';

import './App.css'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import ErrorBoundry from '../components/ErrorBoundry';

const ROBOTS_API_URI = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  useEffect(() => {
    const getRobotsFromAPI = async () => {
      const response = await fetch(ROBOTS_API_URI);
      const robotsJson = await response.json();

      setRobots(robotsJson);
      setLoading(false);
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

export default App;
