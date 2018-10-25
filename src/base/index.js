import Veact from '../lib/veact'

import { Header, Footer, Nav, Status, SearchBar, Session } from '../components/'

import './index.scss'
import '../assets/css/icon-fonts.css'
import '../assets/css/reset.css'

const App = ({ app }) => {
  return (
    <div className="App-root" >
      <Header />

      <div className="App-container">
        <Nav />

        <div className="App-content">
          <Status />
          <SearchBar />
          {
            app.model.sessions.map(session => (
              <Session session={session}/>
            ))
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
