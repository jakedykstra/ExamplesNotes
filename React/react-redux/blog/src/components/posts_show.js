import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    // this.props.match.params is provided from react router. within params it stores all the different wildcard url paths inside our application. For this there is just :id but it could be :posts/:id, which parmas would store both 
    // we destructure id out of it
    const { id } = this.props.match.params;
    // this takes care of fetching an individual post
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    // post comes from this.props.post, which we get from mapStateToProps 
    const { post } = this.props;

    // wont have anything set up till componentDidMount runs, need to have a if for that start. You will run into this all the time in react, just be ready for it
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

  // this is called with the state.posts property changing, second arg is ownProps, it is the props object that is going to the PostsShow component. Whenever the component is rerendered on the screen mapStateToProps gets called to see what props need to be on the screen, and mapStateToProps gets all the props that were going to the component in ownProps. this.props is === ownProps. 
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
