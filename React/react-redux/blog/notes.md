# Working with multiple pages & Load data from backend api & Validation in forms

## Here we will make an app with normal CRUD routes

Upon loading the page we will make an ajax request to a blog post api to render to screen

To handle routes we need to show a different set of react routes onto the screen. We also need to fetch a different batch of data(state). Use react-router to handle this. With this when the user clicks to change routes, it will be sent to a history library which will handle handing off to react-router for it to update the components on the screen based on the new URL. We write the code for react-router to determine what will go on screen

Then react will rerender based on the set of components. This is the process behind single page applications. JS handles changing the components rather than rerendering. It tricks the user in thinking the page changed even if it didnt

## Big change, before we were using selectedbook within books, but as an object we really don't need to. We can simply use the id of the object within books to render just that

We will also want to save them all within an object rather than an array. this way we can simply make the key of each of our objects within the id of the object. We can then pull the info easily

## React life-cycle method

a function on a react component class that is automatically called by react. We are using componentDidMount. It will render once a component renders on screen. though it seems strange to call after the component has rendered, no matter what the component will render first because reacts quick nature. Fetching takes time so it will still be before the ajax request
