import Veact from '../lib/js/veact'

import Header from '../components/Header'
import Nav from '../components/Nav'
import './index.scss'
import '../lib/css/reset.css'

const App = app => {
  return (
    <div className="App-root" >
      <Header />

      <div className="container">
        <Nav />
      </div>
    </div>
  )
}

export default App
