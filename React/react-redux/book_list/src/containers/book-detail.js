import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    // this is a neccessary initial check for whether the this.props.book state is active yet(an action has been passed in). It begins as null, so when we try to render the title below it brings up an error
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // what is returned here shows up as props
    // we use activeBook because the activeBook reducer is creating the piece of state we need for the app
    book: state.activeBook
  };
}


// exporting out to a container
export default connect(mapStateToProps)(BookDetail);
