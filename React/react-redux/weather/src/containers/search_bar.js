//search bar is a container because it needs to have the ability to talk to redux for changing application state
// for this app we use built in bootstrap styling

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// action we created
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // here we set our state up
    // value of the input will be mapped to this.state.term (starts off empty)
    this.state = { term: "" };

    // finding this.onInputChange of 'this' object (SearchBar), then binding 'this' from it's current location, aka binding it to this of SearchBar. We then replace this function with the current this.onInputChange function.
    // Confusing I know. Basically we have to do this because when the function is called from the onChange event, 'this' doesn't refer to the object SearchBar, so when we say this.setState it can't find it.
    // Remeber: if we're passing a call back and referencing this in the method we're calling, we need to bind what this is
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  // all DOM event handlers in JS come along with an event object, which we pass into the function. event.target.value is a vanilla js thing, not react - it gets us the value submitted. 
  // we setState to change term to whatever the value being typed is. If we don't then nothing will log to the search bar because it's value is controlled by the state. AKA, Text wont appear when you type
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevent the default - Don't sumbit the form
    event.preventDefault();

    // We need to go and fetch weather data
    // we pass in the actually city to the action
    this.props.fetchWeather(this.state.term);
    // once we pass the city to the action, we can reset the state value (and searchbar) to empty
    this.setState({ term: "" });
  }
  //By using onSubmit we can change the natural way submit is handled (get request/refresh). We then call function this.onFormSubmit
  // here we need to turn our input into a 'controlled field'(a form element where the value of our input is set by the state of our component, not the other way around). We are decrlaring our input on submit. 
  // we set the value to the state, and tell it whenever someone changes this (onChange) run the function this.onInputChange
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // this takes the actionCreator and binds it to dispatch to the reducers/middleware
  return bindActionCreators({ fetchWeather }, dispatch);
}

// we pass in null, because whenever we are supposed to pass in a dispatch function it should be the second argument
export default connect(null, mapDispatchToProps)(SearchBar);
