import React, { Component } from "react";

import DisplayBooks from "./DisplayBooks";

class ListShelves extends Component {
  render() {
    const { shelves, books } = this.props;

    return (
      <div className="list-books">
        {shelves.map(shelf => {
          return (
            <DisplayBooks
              shelf={shelf}
              books={books.filter(book => book.shelf === shelf.key)}
            />
          );
        })}
      </div>
    );
  }
}

export default ListShelves;
