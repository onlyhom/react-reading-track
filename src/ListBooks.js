import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {
  render(){
    var titleArr = ["currentlyReading", "wantToRead", "read"];
    var booksArr = ['name1','name2','name3'];
    return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                {
                  titleArr.map((booksort,index)=>(
                    <div className="bookshelf" key={index}>
                      <h2 className="bookshelf-title">{ booksort }</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {
                            this.props.booksData.filter(book => book.shelf == booksort)
                            .map((book,index)=>(
                             <li key={index}>
                              <Book 
                                key={book.id}
                                book={book}
                                moveBook={this.props.moveBook}
                              />
                              </li>
                            ))
                          }

                        </ol>
                      </div>
                    </div>

                    ))
                }


              </div>
            </div>
            <div className="open-search">
               <Link to="/searchpage">Add a book</Link>
            </div>
          </div>
          
    )
  }
}

export default ListBooks
