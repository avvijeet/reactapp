import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/reusable/scroll";
import ErrorBoundary from "../components/reusable/errorBoundary";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[]) // [] = only run initially


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="f2">Loading . . .</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
