// creating our action creator. All we care about in this book is which book is selected\
// exporting function out
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  // payload further describes/verifies what is being triggered. 
  // type is always uppercase
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
