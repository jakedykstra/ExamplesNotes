// importing lodash js library for handling TODO:
    //answer:installing lodash for better throttling of our search term input
import _ from "lodash";
// importing react, and destructuring Componet objest to be used
import React, { Component } from "react";
//reactDOM for rendering to html
import ReactDOM from "react-dom";
// import to allow us to use youtube api
// we went on google and got authorized to recieve their youtube API key which allows us to make requests from youtube. We then download a package that allows us to make searchs. We went to the terminal and typed npm install --save youtube-api-search      the --save will place it into our JSON as a dependency. 
import YTSearch from "youtube-api-search";
// importing our own components - SearchBar, VideoList and VideoDetail. Within VideoList we also get the component handling video list items
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
// API_KEY for youtube permissions
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

// Setting up the mai App component to handle all others
// notice: extends component from react library
// REMEMBER: Downwards Dataflow, this means that only the most parent component in an application should be responsible for fetching data
class App extends Component {
  // for all class components extending, use constructor props and super props to recieve data
  constructor(props) {
    super(props);
    // all components get this.state. It is not to be changed manually but with setState. Note, all data in state should be all data in your app that could fluctuate
    this.state = {
      // data in state that is important here is videos and whether one was selected
      videos: [],
      selectedVideo: null
    };
    // default browser videoSearch. This refers to the App object, which then renders the method videoSearch with "surfboards"
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    // recieves term then based on YTSearch, takes in a key parameter of the API and then the term. Next an arrow function with that changes the state with setState by passing an object of videos data from the searchbar im guessiong
    // callback funtion once we get videos out of term. 'videos' could also be called data as it gets the data from the first param
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        //when an object key and value are the same, with ES6 was can simply bracket both of them like {video}, this is what we would do here if we didnt need selectedVideo. NOTE: you will see this a lot in React. Syntactic sugar
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // we installed lodash because we only want to call this function once every so many miliseconds
    // we created a function and passed it to debounce. debounce takes the inner function and returns a new function that can only be called once every 300 miliseconds. This is an easier way of using an setInterval for taking the term and calling the change to the videoSearch(term) function handling the setState
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    //once videoSearch(term) is called the setState changes which then calls for a new render
    // we render the SearchBar to the page and pass the videoSearch data(holding the videoSearch(term) as a prop to the file, to get to this use onSearchTermChange
    // VideoDetail gets a prop of video with selected video if that was the reason for state change
    // VideoList needs a reference to the App component where videos data is stored. This is done through props. Below we pass the videos state data from App to VideoList as an object. Because VideoList is a functional component, this data will be passed as an argument.
      // We pass another function to VideoList called selectedVideo. What this function does is takes a video and defines it on apps state (updates app's state) with a new video. We're passing a function that changes another component.
       // remember for video list anything in there is passed as a property to VideoList. So onVideoSelect and videos will pass to the VideoList component as a property under 'props'. So you can now access it on that component with props.onVideoSelect

       //this.state.selectedVideo is needed because if it was just video it would try to render automatically. With selectedvideo starting as null this stops that. Then when the api comes back from youtube we can make the selectedvideo the first in the index until it is selected
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// all in App is rendered to the container
ReactDOM.render(<App />, document.querySelector(".container"));
