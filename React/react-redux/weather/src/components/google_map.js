import React, { Component } from "react";
// googleMap is a very easy api for us to get. The problem is because it does a lot of the work for you, it doesn't know how to play nice in a react enviornment
class GoogleMap extends Component {
  // this is one of our lifecycle methods that gets called automatically once the component is rendered to the screen
  // inside we call new google.maps.Map which is how we create an embedded google map inside of our app. It takes a reference, to where we want to render this map to in the html (hence the 'ref' attribute below, and an options object, where we can make changes to the default map)
  // doing this is generally how we make a third party libraries work with react when they dont understand what render is
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      // zoom amount
      zoom: 12,
      // where we want the map to center on
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // here we make use of the ref system in react, which allows us to get a direct reference to an html element that has been rendered to the page
  // once this renders to the page, we can get a direct reference to it by using this.refs.map
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
