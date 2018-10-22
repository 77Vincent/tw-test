import Veact from '../lib/js/veact'

import { Header, Footer, Nav, Status, SearchBar, Session } from '../components/'

import './index.scss'
import '../lib/css/reset.css'

const App = ({ app }) => {
  return (
    <div className="App-root" >
      <Header />

      <div className="container">
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
