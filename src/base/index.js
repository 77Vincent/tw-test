import Veact from '../lib/js/veact'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import './index.scss'
import '../lib/css/reset.css'

const App = app => {
  return (
    <div className="App-root" >
      <Header />

      <div className="container">
        <Nav />
      </div>

      <Footer />
    </div>
  )
}

export default App
