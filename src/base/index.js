import Veact from '../lib/js/veact'

import { Header, Footer, Nav, Status, SearchBar } from '../components/'

import './index.scss'
import '../lib/css/reset.css'

const App = app => {
  return (
    <div className="App-root" >
      <Header />

      <div className="container">
        <Nav />

        <div className="App-content">
          <Status />
          <SearchBar />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
