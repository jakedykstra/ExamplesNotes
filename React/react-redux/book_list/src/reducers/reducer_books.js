// exporting function that will return the data in our application state for books
// Once this is made we wire in the reducer to react. Create index.js for this
export default function() {
  return [
    { title: "Javascript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 }
  ];
}
