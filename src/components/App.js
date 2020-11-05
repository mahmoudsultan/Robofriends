import { Component } from 'react';

import './App.css'

import CardList from './CardList';
import SearchBox from './SearchBox';

const ROBOTS_API_URI = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      seachField: '',
      loading: true,
    };
  }

  onSearchChange = (event) => {
    this.setState({ seachField: event.target.value });
  }

  async componentDidMount() {
    const robotsFromApi = await (await fetch(ROBOTS_API_URI)).json();

    this.setState({ robots: robotsFromApi, loading: false });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.seachField.toLowerCase())
    });

    return (
      <>
        <h1 className='tc f-headline mb2'>RoboFriends</h1>
        <p className='tc mb5 f3'>My First React App.</p>
        <SearchBox searchChange={this.onSearchChange} />

        {(() => {
          if (this.state.loading) {
            return <h2>Loading...</h2>;
          } else {
            return <CardList robots={filteredRobots} />;
          }
        })()}
      </>
    );
  }
}

export default App;
