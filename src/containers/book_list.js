import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          >
          {book.title}          
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

// Anything returned from this will end up as props on the BookList container,
// lets it do "this.props.selectBook".
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all our reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a Component to a Container. Needs to know about the new
// dispatch method "selectBook". Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


