## redux

If raect is the views in the application, redux is the changing data in the app. It's a collection of data within the app. Redux centralizes all the info into one application state.

One of most important aspects when working with redux is determining how to model your state (You dont want to have to change it)

### Reducer

A function that returns a piece of the application state. Gets us the data to use

Because we can have many different peices of state within our application state, we can have reducers for grabbing each. A reducer for each state in the application

The function should produce the value of the state

### React-Redux and Containers

To merge react and redux we use a seperate library called react redux. We will then create react containers, which are components that have a direct connection to the state that is managed by redux

Containers can be known as smart components as opposed to dumb components which dont link to redux. These will go in seperate folders called containers

Which components should be containers? In general we want the most parent container that cares about state to be a container. App doesn't care about the state because it just renders the page. Within we would want components for books list and bookdetail because they care about the state

### Actions and Action Creators

Almost everything in a redux application starts off with an event trigger. This could be direct or indirect, such as hovering vs. an ajax request finishing up. These events can optionally call an action creator which is a function that returns an action

The action creator is a function that returns an object. This object is then sent to all of our reducers in the application. Reducers then choose whether to return a different piece of state depending on what the action is (whether the object matters to it). If the state changes, that gets pumped back into the application state which then cause all components on the page to rerender

The object in the application creator holds a type value that describes type of action that was just triggered. It can also have data that further describes the action

What we usually do to work with actions is inside all of our reducers, we place switch statements that will go to a different line depending on the type of action. If the reducer cares about the action (which it will know based on the switch) then the state will be changed

Action creator objects are pointless if they don't flow through the reducers. They are plain objects whose sole purpose is to notify/change state based on reducers switch. Use connect and mapDispatchToProps for sending to reducers
