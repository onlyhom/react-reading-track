import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

  state = {
    searchString: '',
    booksData: []
  }

  changeSearchString = (searchString) => {
    if (!searchString) {
    // 输入为空时，状态设置为初始状态；
      this.setState({searchString: '', booksData: []})
    } else {
      // 输入不为空时，使用BookAPI的search()异步更新状态数据
      this.setState({ searchString: searchString.trim() })
      BooksAPI.search(searchString).then((booksData) => {
        console.log(booksData);
        if (booksData.error) {
          booksData = [];
        }
        booksData.map(book => (this.props.booksData.filter((oneShelfBook) => oneShelfBook.id === book.id)
        .map(oneShelfBook => book.shelf = oneShelfBook.shelf)));
        this.setState({booksData})
      })
    }
  }

  render(){
    var booksArr = ['name1','name2','name3'];

    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="通过书名或作者名来查" onChange={(event)=> this.changeSearchString(event.target.value) }/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.booksData.map((book,index)=>(
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
    )
  }
}

export default SearchPage
