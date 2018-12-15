import React, { Component } from "react";
// redux form is a library we use for entering in forms and sending to databases
// the documentation on their website is really good, and I encourage you to check it out. It has examples for all kinds of differernt forms you might want to use. what this library does for us is makes it so we dont have to manually set up a bunch of action creators
// When working with forms we want to have one field component per piece of state. 
// field is used to specify an input inside of this component
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  //field object is pushed to this because we need the event handlers within to make sure that Field makes the changes for the input returned. 
  // All we really need to do is ...field.input, which is an object that has different event handlers and props, like value of input and onChange, by doing ... we are saying that this is an object and we want all of diff properties to be communicated to the inputs tag. 
  // input needs to know it is for a text type input
 // when working with validate, field will get a field.meta.error property from the validate function. You can then use this to display to the user. String from inside validate will render inside this property. 
  renderField(field) {
    // three states to a form: prestine is untouched, touched, is when an input has been focused in then out (can assume values are entered), and invalid is error in field.
    // we take the field.meta and extract values touched and error
    // this is how destructoring is done with mutliple nested objects
    const { meta: { touched, error } } = field;
    // if touched is error, we use className has-dange to make input border red
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    // here we use a ternary expression, reminder with these, everything before the '?' is evaluated and if true we get what is between the ? and :, if false we get after the :
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  // this is a helper function 
  onSubmit(values) {
    // sends the values to the action creator 

    this.props.createPost(values, () => {
          // this says to go back to our root route of the application, history gets pushed to a route in the application, but we only want to do this after the post has been created, we do this by sending this function as a callback to the action, using promises we wil only call it once the api post reqeust is successful
      this.props.history.push("/");
    });
  }

  render() {
    // here we use deconstructing to reference this.props and pull off the handleSubmit function. This is a property we get on behalf of reduxForm 
    // handleSumbit takes a function that we define, and runs reduxForm and if reduxForm doesn't have any errors, it will call back our function and passes the values in the submit for us to work with
    const { handleSubmit } = this.props;
    // here we specify the different fields in our input, which is used to represent a distinct input that will be viewable by our users
    // name should reflect what is going into the field
    // component - property that takes in a function that is used to display the field. This fixes the big shortcoming of Field, which is that it doesn't know how to show itself on screen to its users in JSX. This makes us place a component property in all fields, which calls a function to handle rendering jsx on screen. Field is a data keeper and we need to render it to the screen
    // notice when we call the function that we don't need parens because the Field will automatically call the function in the future
    // for submitting the form, we pass it to handleSubmit and as an argument we pass this.onSubmit.bind(this). this.onSubmit is a helper function above
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

 // Redux form handles validation automatically. If any values are incorrect, we just set up this validate function to handle
 // validate will be called for us automatically during hte life-cycle, most notably, whenver a user trys to sumbit a form.
// validate gets a single argument which is values, it holds all values inputted into the form. It will come back in an object. 

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  // need an errors object to store all errors
  const errors = {};

  // Validate the inputs from 'values'
  //values property names need to be the same as the field name
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

// this is handled much like the connect, its a helper that allows redux form to communicate directly from the component to the reducer 
// it takes many different options, form is the name of the form (obviously we could have many on the same page), the string PostsNewForm identifies the one we're working with. String should be unique to this form
// validate is also exported. note it is a key/value pair condensced. 

// the main purpose of this is passing a ton of properties and methods to our component PostsNew, such as reduxForm 
// NOTE: redux form only handles state and validation, it doesnt handle anything like saving the data or making a post request
// also note, here we have combined reduxForm with our connect since they serve the same purpose
export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
