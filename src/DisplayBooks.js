import React, { Component } from "react";
import { Link } from "react-router-dom";

class DisplayBooks extends Component {
  render() {
    const { books, shelf } = this.props;
    let showingBooks = books;

    return (
      <div className="list-books">
        {shelf.name}
        {showingBooks.map(book => {
          return <p key={book.id}>{book.authors[0]}</p>;
        })}
      </div>
    );
  }
}

export default DisplayBooks;
