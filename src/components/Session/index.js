import Veact from '../../lib/js/veact'

import Icon from '../Icon'
import Button from '../Button'
import './index.scss'

export default ({ session, app }) => {
  return (
    <div className="App-session">
      <div className="App-session-image"></div>

      <div className="App-session-block-right">
        <div className="App-session-block-top">
          <Icon opacity={0.5} />
          <div className="App-session-url"> {session.url} </div>
          <div className="App-session-status-wrap">
            <div className={`App-session-status App-session-status-${session.status}`}> {session.status} </div>
          </div>

          <Icon opacity={0.5} />
          <div className="App-session-ip"> {session.ip} </div>

          <Icon opacity={0.5} />
          <div className="App-session-path"> {session.path} </div>
        </div>

        <div className="App-session-block-bottom">
          <div className="App-session-add"><Icon /></div>
          {
            session.browsers.map(browser => (
              <div className="App-session-browser">
                <span>{app.model.browserIndex[browser].name}</span>
                <Icon size="s"/>
              </div>
            ))
          }
          <Button className="App-session-deny"> Deny </Button>
        </div>
      </div>
    </div>
  )
}
