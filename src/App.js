import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    // 书数组
    booksData: []
  }

  moveBook = (book, shelf) => {
    // 若书堆中有书，即书堆不为空时
    // 由BookAPI的update()中的fetch方式来异步获取更新数据
    if (this.state.booksData) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          booksData: state.booksData.filter(oneBook => oneBook.id !== book.id).concat([book])
        }))
      })
    }
  }

  // 执行componentDidMount()钩子时异步获取数据
  componentDidMount() {
    BooksAPI.getAll().then((booksData) => {
      this.setState({ booksData })
      console.log(booksData);
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/searchpage" render={() => (
          // 搜索页
              <SearchPage booksData={this.state.booksData} moveBook={this.moveBook}/>
        )} />

        <Route exact path="/" render={() => (
          // 主页
          <ListBooks booksData={this.state.booksData} moveBook={this.moveBook}/>

        )} />
    </div>)
  }
}

export default BooksApp
