import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import duke from './img/duke.jpg'; // Assume these images are in your src/img directory
import perry from './img/perry.jpg';
import tubby from './img/tubby.jpg';
import whiskey from './img/whiskey.jpg';

function App() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

  return (
    <Router>
      <Nav dogs={dogs} />
      <Switch>
        <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
        <Route path="/dogs/:name" render={props => <DogDetails dogs={dogs} {...props} />} />
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}

export default App;
