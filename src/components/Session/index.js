import Veact from '../../lib/js/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ session }) => {
  return (
    <div className="App-session">
      <div className="App-session-image"></div>

      <div className="App-session-block-top">
        <Icon opacity={0.5} />
        <div className="App-session-url"> {session.url} </div>
        <div className={`App-session-status App-session-status-${session.status}`}> {session.status} </div>
        <Icon opacity={0.5} />
        <div className="App-session-ip"> {session.ip} </div>
        <Icon opacity={0.5} />
        <div className="App-session-path"> {session.path} </div>
      </div>
    </div>
  )
}
