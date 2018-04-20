// Note that the 'state' argument is not the total application state, but rather just the
// state that this reducer is responsible for.
export default function(state = null /*if undefined, set to null*/, action) {
  switch(action.type) {
  case "BOOK_SELECTED":
    return action.payload;
  }
  return state;
}
