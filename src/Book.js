import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

class Book extends Component {

  changeShelf(shelf) {
    this.props.moveBook(this.props.book, shelf)
  }

  render(){

    const {book} = this.props

    return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf!== undefined ? book.shelf : 'none'} onChange={(event) => this.changeShelf(event.target.value)}>
                <option value="none" disabled>移动到...</option>
                <option value="currentlyReading">正在读</option>
                <option value="wantToRead">想读</option>
                <option value="read">已读</option>
                <option value="none">无</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
  }

}

export default Book