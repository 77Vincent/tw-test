import Veact from '../../lib/js/veact'

import './index.scss'

export default ({ session }) => {
  return (
    <div className="App-session">
      <div className="App-session-url"> {session.url} </div>

      <div className={`App-session-status ${session.status}`}> {session.status} </div>
    </div>
  )
}
