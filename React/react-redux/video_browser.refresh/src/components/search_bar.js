import React, { Component } from "react";

//we need react components for all where we make a component

class SearchBar extends Component {
  constructor(props) {
    super(props);
// only data that will change for this component is the term in search
    this.state = { term: "" };
  }
  // because the class still needs to render itself somehow, we will give it a method. Below is syntax for class method. Note there are no colon's
// this will render whenever the class is called
// how the search bar is set up to the DOM
  render() {
    return (
      // className to give it a class - then css the hell out of it
      // note it is done with jsx instead of html, attributes are slightly different (className instead of class)
      <div className="search-bar">
        <input
        // input value is that of the state.term. This is where it is held in the document
        // okay to referenece state but never modify this way. Only modify using this.setState(). Value of input will update everytime state is modified.
        // here we are telling it that the value of the input is equal to the state
          value={this.state.term}
           //all html input elements emmit a change event whenever a user reacts with them. 
           //To use these browser events, simply use 'on' and the name of the event 'Change' then set it equal to the method  you want to use. Also include the event handler as simply event=>. Keep it all in curly braces.
           //method syntax should follow basic structure of 'on' or 'handle' follow by the element watching for events, and then the name of the event itself. This way it tells its purpose.
            // event argument (what gets passed into the event handler) will provide the information about the event that occured. Can use this to get value of input.
            //Change is the name of the event we are wishing to tap into. This is a plain vanillaJS with HTML thing. Please look into different events
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
   //handling input change
  onInputChange(term) {
    // the setState is called here, rendering a new component
    // what is placede as a term calls it
    // "on" + "ElementWeAreWatching" + "TypeOfEvent "
    this.setState({ term });
    this.props.onSearchTermChange(term);
    // props sends its data and term gets the videoSearch data
  }
}
// export out the Searchbar
export default SearchBar;
