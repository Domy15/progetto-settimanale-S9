import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Component } from 'react'


class App extends Component{
  state= {
    numberPage: 1,
  }

  changePage = (num) => {
    this.setState({numberPage: num});
  }

render() {
  return (
    <>
      <NavBar changePage={this.changePage}/>
      {this.state.numberPage == 1 ? (
          <Home />
        ) : this.state.numberPage == 2 ? (
          <Settings />
        ) : (
          <Profile />
        )}
      <Footer />
    </>
  )}
}

export default App
