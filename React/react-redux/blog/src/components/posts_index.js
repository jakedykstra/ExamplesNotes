// a key to react is its speed. we want to be able to know when a different component is going to be rendered ahead of time so we can do our fetch asap.
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// when working with react, link is used rather than an anchor tag for sending to different pages. Think of as identical to classic anchor tag
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    //placing this inside componentDidMount will kick off the data rendering action function because componentDidMount is a life=cycle element, meaning it is rendered automatically. 
    this.props.fetchPosts();
  }

  renderPosts() {
    // we use lodash's map method because it can handle objects 
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }
  // link tag comes from Link imported above, to property will tell it where we want to send them to
  // link tags come out as an anchor but they prevent the events that with default anchors issue a http request
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// before we've been placing dispatch to props in the second arguement to send to reducers, here instead we place in the fetchPosts action creator function. We also use ES6 to condense it down so that instead of fetchPosts:fetchPosts it's simply fetchPosts. Doing it this way is completely identical, this jsut asks connect to do that extra step for us. there are times when you will want to do the seperate breakout function so you can decide how you want to call the action creator ahead of time or see more of behind the scenes
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
