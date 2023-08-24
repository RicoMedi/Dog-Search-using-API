import React from "react";
import axios from "axios";

import Search from "./search";
import "./styles.css";

const fetchDoggies = (breed) => {
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res)
    .catch((err) => {
      console.error("Error fetching dogs:", err);
      return { data: { message: [] } };
    });
};

class App extends React.Component {
  constructor() {
    console.log("constructor ran");
    super();
    this.state = {
      doggies: [],
      breed: "doberman"
    };
    fetchDoggies("doberman").then((res) => {
      this.setState({ doggies: res.data.message });
    });
  }

  componentDidMount() {
    console.log("component did mount");
    fetchDoggies(this.state.breed).then((res) => {
      this.setState({ doggies: res.data.message });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  searchDogs = (dogName) => {
    console.log("search dogs");
    fetchDoggies(dogName).then((res) => {
      if (res && res.data && res.data.message) {
        console.log(res);
        this.setState({ doggies: res.data.message, breed: dogName });
      } else {
        console.log("No images found for this breed.");
      }
    });
  };

  render() {
    console.log("render function ran");
    const { doggies } = this.state;
    return (
      <div className="App">
        <h1>Dogs Are The Best</h1>
        <Search searchDogs={this.searchDogs} />
        <div className="pictures">
          {doggies.length === 0 ? (
            <p>No images found for this breed.</p>
          ) : (
            doggies.map((dog, index) => (
              <img width="200" src={dog} key={index} alt={dog} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
