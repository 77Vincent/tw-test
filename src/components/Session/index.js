import Veact from '../../lib/veact'

import Icon from '../Icon'
import Button from '../Button'
import './index.scss'

export default ({ session, app }) => {
  return (
    <div className="App-session">
      <div className="App-session-image"></div>

      <div className="App-session-block-right">
        <div className="App-session-block-top">
          <Icon type="monitor"/>
          <div className="App-session-url"> {session.url} </div>
          <div className="App-session-status-wrap">
            <div className={`App-session-status App-session-status-${session.status}`}> {session.status} </div>
          </div>

          <Icon type="info-circled-alt"/>
          <div className="App-session-ip"> {session.ip} </div>

          <Icon type="folder-empty"/>
          <div className="App-session-path"> {session.path} </div>
        </div>

        <div className="App-session-block-bottom">
          <div className="App-session-add">
            <Icon style={{ color: '#fff' }} type="plus"/>
          </div>
          {
            session.browsers.map(browser => (
              <div className="App-session-browser">
                <span>{app.model.browserIndex[browser].name}</span>
                <Icon type="trash-1"/>
              </div>
            ))
          }
          <Button prefix="block" className="App-session-deny"> Deny </Button>
        </div>
      </div>
    </div>
  )
}
