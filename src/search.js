import React from "react";

class Search extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchDogs(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.inputValue}
            type="text"
          />
          <button>Search Dogs</button>
        </form>
      </div>
    );
  }
}

export default Search;
